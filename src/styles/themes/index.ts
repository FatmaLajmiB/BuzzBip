import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { effects } from './effects';

export const theme = {
  colors,
  typography,
  spacing,
  effects,
  fonts: {
    primary: '"Parkinsans", sans-serif',
    secondary: '"Georgia", serif'
  }
} as const;

export type Theme = typeof theme