import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightTheme } from '../lib/theme';

addDecorator(storyFn => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {storyFn()}
  </ThemeProvider>
));
