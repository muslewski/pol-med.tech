import os
import json
from googletrans import Translator

# Ścieżka do katalogu z tłumaczeniami
translation_dir = './src/Languages/'
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

def update_language_file(pl_data, lang_data):
    """Aktualizuje plik językowy, dodaje brakujące klucze i poprawia niezgodności."""
    updated = False
    corrected_data = {}

    for key in pl_data.keys():
        if key in lang_data:
            # Zachowaj istniejące tłumaczenie, jeśli klucz jest obecny
            corrected_data[key] = lang_data[key]
        else:
            # Dodaj brakujący klucz do corrected_data z pustą wartością
            corrected_data[key] = ''
            updated = True

    # Usuń nieprawidłowe klucze z lang_data, które nie istnieją w pl_data
    for key in lang_data.keys():
        if key not in pl_data:
            print(f"Warning: Key '{key}' in language file does not exist in source file.")
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
    pl_path = os.path.join(translation_dir, pl_file)
    pl_data = load_json(pl_path)

    # Przetwarzaj pliki dla innych języków
    for lang in languages:
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
        corrected_data, updated = update_language_file(pl_data, lang_data)

        if updated:
            # Zapisz zaktualizowane tłumaczenia
            save_json(lang_path, corrected_data)

            # Dodaj tłumaczenie tylko dla nowo dodanych kluczy
            for key in corrected_data.keys():
                if corrected_data[key] == '':
                    # Tłumaczenie tekstu
                    translation = translator.translate(pl_data[key], src='pl', dest=lang).text
                    corrected_data[key] = translation

            # Zapisz ostateczne tłumaczenia
            save_json(lang_path, corrected_data)