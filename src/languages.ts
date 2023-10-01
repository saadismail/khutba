interface LanguageType {
  key: string;
  title: string;
}

enum Language {
  ARABIC,
  ENGLISH,
  TURKISH
}

export const languages: Record<Language, LanguageType> = {
  [Language.ARABIC]: {
    key: "arabic",
    title: "Arabic"
  },
  [Language.ENGLISH]: {
    key: "english",
    title: "English"
  },
  [Language.TURKISH]: {
    key: "turkish",
    title: "Turkish"
  },
}
