
export default function useI18n({ ptBr, es, en }) {
  const messages = {
    en,
    es,
    pt: ptBr,
  };

  let locale =
    navigator.language?.slice(0, 2) ||
    navigator.userLanguage?.slice(0, 2) ||
    "pt";

  if (!["en", "es", "pt"].includes(locale)) {
    locale = "pt";
  }

  return messages[locale];
}
