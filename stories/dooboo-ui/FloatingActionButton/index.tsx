import React, {ReactElement} from 'react';

import {ContainerDeco} from '../../../storybook/decorators';
import {FABStory} from './FABStory';
import {ThemeProvider} from '../../../main/theme';
import {storiesOf} from '@storybook/react-native';

/**
 * Below are stories for web
 */
export default {
  title: 'FAB',
};

export const toStorybook = (): ReactElement => <FABStory />;

toStorybook.story = {
  name: 'FAB',
};

/**
 * Below are stories for app
 */
storiesOf('FAB', module)
  .addDecorator(ContainerDeco)
  .add('FAB - light', () => (
    <ThemeProvider initialThemeType="light">
      <FABStory />
    </ThemeProvider>
  ))
  .add('FAB - dark', () => (
    <ThemeProvider initialThemeType="dark">
      <FABStory />
    </ThemeProvider>
  ));
