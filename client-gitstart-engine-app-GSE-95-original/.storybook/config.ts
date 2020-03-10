import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '23px',
      display: 'inline',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 4px',
    lineHeight: '1.9',
  },
};

addDecorator(withInfo({ inline: true, source: true, styles: wInfoStyle }));
addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

const req = require.context('../src', true, /\.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
