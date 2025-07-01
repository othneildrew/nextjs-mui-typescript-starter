'use client';

import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      }
    }
  },
});
