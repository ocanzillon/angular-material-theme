export const AVAILABLE_THEMES = [
  'theme-purple-orange-theme',
  'theme-purple-yellow-theme',
  'theme-purple-blue-theme',
  'theme-orange-purple-theme',
  'theme-orange-yellow-theme',
  'theme-orange-blue-theme',
  'theme-yellow-purple-theme',
  'theme-yellow-orange-theme',
  'theme-yellow-blue-theme',
  'theme-blue-purple-theme',
  'theme-blue-orange-theme',
  'theme-blue-yellow-theme',
  'theme-purple-orange-dark-theme',
  'theme-purple-yellow-dark-theme',
  'theme-purple-blue-dark-theme',
  'theme-orange-purple-dark-theme',
  'theme-orange-yellow-dark-theme',
  'theme-orange-blue-dark-theme',
  'theme-yellow-purple-dark-theme',
  'theme-yellow-orange-dark-theme',
  'theme-yellow-blue-dark-theme',
  'theme-blue-purple-dark-theme',
  'theme-blue-orange-dark-theme',
  'theme-blue-yellow-dark-theme'
] as const;

export type Theme = typeof AVAILABLE_THEMES[number];

export interface ThemeConfig {
  theme: Theme;
}
