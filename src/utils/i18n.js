import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

// List of available languages
const availableLanguages = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
  uk: "Українська",
  cs: "Česky",
  sk: "Slovenský",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  lt: "Lietuvių",
  nl: "Nederlands",
  pt: "Português",
};

// Funkcja do uzyskiwania języka z localStorage lub domyślnego
const getLanguage = () => {
  const savedLanguage = localStorage.getItem("language");

  // Sprawdź, czy zapisany język jest na liście dostępnych języków
  if (savedLanguage && availableLanguages[savedLanguage]) {
    return savedLanguage;
  }

  // Jeśli zapisany język jest nieprawidłowy, sprawdź język nawigatora
  const navigatorLanguage = navigator.language.split("-")[0];
  console.log(navigatorLanguage);
  if (availableLanguages[navigatorLanguage]) {
    return navigatorLanguage;
  }

  // Jeśli język nawigatora jest nieprawidłowy, ustaw domyślny język
  return "pl"; // domyślny język
};

i18n
  .use(initReactI18next)
  .use(HttpApi) // Użyj backendu HTTP do ładowania plików tłumaczeń
  .init({
    fallbackLng: "pl",
    lng: getLanguage(),
    ns: [
      "Navbar",
      "Footer",
      "Others",
      "Home",
      "Edcation",
      "Oils",
      "Tools",
      "About",
      "Contact",
      "PrivacyPolicy",
      "Copyright",
    ],
    defaultNS: "Home", // Default namespace
    backend: {
      loadPath: "/Languages/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
export { getLanguage, availableLanguages };
