import os
import json
from googletrans import Translator

# Ścieżka do katalogu z tłumaczeniami
translation_dir = './public/Languages/'
# Lista języków do tłumaczenia (kody języków)
languages = ["cs", "de", "en", "es", "fr", "it", "lt", "nl", "pt", "sk", "uk"]  # Możesz dodać lub usunąć kody języków

translator = Translator()

def load_json(file_path):
    """Wczytuje plik JSON."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(file_path, data):
    """Zapisuje dane do pliku JSON."""
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def create_directory_if_not_exists(directory):
    """Tworzy katalog, jeśli nie istnieje."""
    if not os.path.exists(directory):
        os.makedirs(directory)

def translate_value(value, lang):
    """Tłumaczy wartość jeśli jest tekstem."""
    if isinstance(value, str):
        translation = translator.translate(value, src='pl', dest=lang).text
        print(f"Tłumaczenie '{value}' na '{lang}': '{translation}'")  # Print the translation process
        return translation
    return value

def update_language_file(pl_data, lang_data, lang):
    """Aktualizuje plik językowy, dodaje brakujące klucze i poprawia niezgodności."""
    updated = False
    corrected_data = {}

    for key, pl_value in pl_data.items():
        if key in lang_data:
            lang_value = lang_data[key]
            if isinstance(pl_value, dict) and isinstance(lang_value, dict):
                corrected_data[key], _updated = update_language_file(pl_value, lang_value, lang)
                updated = updated or _updated
            elif isinstance(pl_value, list) and isinstance(lang_value, list):
                corrected_data[key] = [
                    update_language_file(item, lang_value[idx], lang)[0] if isinstance(item, dict) else translate_value(item, lang)
                    for idx, item in enumerate(pl_value)
                ]
                updated = updated or corrected_data[key] != lang_value
            else:
                corrected_data[key] = lang_value
        else:
            if isinstance(pl_value, dict):
                print(f"Przetwarzanie zagnieżdżonego słownika dla klucza '{key}'")
                corrected_data[key], _ = update_language_file(pl_value, {}, lang)
            elif isinstance(pl_value, list):
                print(f"Przetwarzanie listy dla klucza '{key}'")
                corrected_data[key] = [translate_value(item, lang) for item in pl_value]
            else:
                print(f"Tłumaczenie wartości dla klucza '{key}'")
                corrected_data[key] = translate_value(pl_value, lang)
            updated = True

    # Usuń nieprawidłowe klucze z lang_data, które nie istnieją w pl_data
    if isinstance(lang_data, dict):
        for key in lang_data.keys():
            if key not in pl_data:
                print(f"Warning: Klucz '{key}' w pliku językowym nie istnieje w pliku źródłowym.")
                updated = True

    return corrected_data, updated


# Zbieranie plików JSON z katalogu "pl"
pl_files = []

# Przeszukaj wszystkie katalogi i podkatalogi
for root, dirs, files in os.walk(translation_dir):
    for file in files:
        if file.endswith('.json'):
            # Sprawdź, czy plik jest w katalogu "pl"
            if 'pl' in os.path.relpath(root, translation_dir):
                pl_files.append(os.path.relpath(os.path.join(root, file), translation_dir))

print("Files to process:", pl_files)

for pl_file in pl_files:
    print(f"Przetwarzanie pliku: {pl_file}")
    pl_path = os.path.join(translation_dir, pl_file)
    pl_data = load_json(pl_path)

    # Przetwarzaj pliki dla innych języków
    for lang in languages:
        print(f"Tłumaczenie na język: {lang}")
        lang_file = pl_file.replace('pl/', f'{lang}/')
        lang_path = os.path.join(translation_dir, lang_file)

        # Tworzenie katalogu dla danego języka, jeśli nie istnieje
        lang_dir = os.path.dirname(lang_path)
        create_directory_if_not_exists(lang_dir)

        # Sprawdź, czy plik dla danego języka istnieje
        if os.path.exists(lang_path):
            lang_data = load_json(lang_path)
        else:
            # Jeśli plik nie istnieje, utwórz nowy z pustymi wartościami
            lang_data = {}
            save_json(lang_path, lang_data)

        # Aktualizuj plik językowy, dodaj brakujące klucze i popraw niezgodności
        corrected_data, updated = update_language_file(pl_data, lang_data, lang)

        if updated:
            print(f"Zapis zaktualizowanego pliku dla języka: {lang}")
            # Zapisz zaktualizowane tłumaczenia
            save_json(lang_path, corrected_data)
