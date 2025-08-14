export type Locale = (typeof locales)[number];

export const locales = ['fr', 'en', 'id'] as const;
export const defaultLocale: Locale = 'fr';
