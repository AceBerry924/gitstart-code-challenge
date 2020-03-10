import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, withKnobs } from '@storybook/addon-knobs';
import uuid from 'uuid/v1';
import moment from 'moment';
import KanBanBoard from 'components/KanbanBoard/';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'template/theme';

const lists = [
  {
    id: 'incoming',
    title: 'Incoming',
  },
  {
    id: 'in_progress',
    title: 'In progress',
  },
  {
    id: 'in_review',
    title: 'In review',
  },
  {
    id: 'completed',
    title: 'Completed',
  },
];

const tasks = [
  {
    id: uuid(),
    ref: '38',
    listId: 'incoming',
    title: 'Call with sales of HubSpot',
    desc:
      'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
    members: [
      '/template/images/avatars/avatar_1.png',
      '/template/images/avatars/avatar_5.png',
      '/template/images/avatars/avatar_6.png',
    ],
    files: 0,
    comments: 1,
    progress: 0,
    deadline: moment().add(7, 'days'),
  },
  {
    id: uuid(),
    ref: '37',
    listId: 'incoming',
    title: 'Interview for the Asis. Sales Manager',
    desc:
      'We are looking for vue experience and of course node js strong knowledge',
    members: [
      '/template/images/avatars/avatar_2.png',
      '/template/images/avatars/avatar_3.png',
    ],
    files: 0,
    comments: 2,
    progress: 0,
    deadline: moment().add(6, 'days'),
  },
  {
    id: uuid(),
    ref: '39',
    listId: 'incoming',
    title: 'Change the height of the top bar because it looks too chunky',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/template/images/avatars/avatar_11.png'],
    files: 0,
    comments: 0,
    progress: 0,
    deadline: moment().add(5, 'days'),
  },
  {
    id: uuid(),
    ref: '19',
    listId: 'incoming',
    title: 'Integrate Stripe API',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: [
      '/template/images/avatars/avatar_6.png',
      '/template/images/avatars/avatar_5.png',
      '/template/images/avatars/avatar_9.png',
    ],
    files: 2,
    comments: 1,
    progress: 0,
    deadline: moment().add(4, 'days'),
  },
  {
    id: uuid(),
    ref: '15',
    listId: 'in_progress',
    title: 'Update the customer API for payments',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: ['/template/images/avatars/avatar_10.png'],
    files: 2,
    comments: 0,
    progress: 60,
    deadline: moment().add(4, 'hours'),
  },
  {
    id: uuid(),
    ref: '10',
    listId: 'in_progress',
    title: 'Redesign the landing page',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: [
      '/template/images/avatars/avatar_10.png',
      '/template/images/avatars/avatar_11.png',
    ],
    files: 0,
    comments: 2,
    progress: 76,
    deadline: moment().add(4, 'hours'),
  },
  {
    id: uuid(),
    ref: '24',
    listId: 'in_review',
    title: 'Change the height of the top bar because it looks too chunky',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: [
      '/template/images/avatars/avatar_6.png',
      '/template/images/avatars/avatar_4.png',
      '/template/images/avatars/avatar_2.png',
    ],
    files: 0,
    comments: 7,
    progress: 90,
    deadline: moment().subtract(1, 'days'),
  },
  {
    id: uuid(),
    ref: '21',
    listId: 'in_review',
    title: 'Integrate Stripe API',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: [
      '/template/images/avatars/avatar_6.png',
      '/template/images/avatars/avatar_4.png',
      '/template/images/avatars/avatar_8.png',
      '/template/images/avatars/avatar_2.png',
    ],
    files: 0,
    comments: 7,
    progress: 90,
    deadline: moment().subtract(1, 'days'),
  },
  {
    id: uuid(),
    ref: '17',
    listId: 'completed',
    title: 'Design Customer Management Page',
    desc: 'Change the height of the top bar because it looks too chunky',
    members: [
      '/template/images/avatars/avatar_6.png',
      '/template/images/avatars/avatar_2.png',
      '/template/images/avatars/avatar_9.png',
    ],
    files: 3,
    comments: 3,
    progress: 100,
    deadline: moment().subtract(7, 'days'),
  },
  {
    id: uuid(),
    ref: '23',
    listId: 'completed',
    title: 'Integrate Messaging API',
    desc:
      'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
    members: [
      '/template/images/avatars/avatar_6.png',
      '/template/images/avatars/avatar_4.png',
      '/template/images/avatars/avatar_5.png',
      '/template/images/avatars/avatar_2.png',
      '/template/images/avatars/avatar_9.png',
    ],
    files: 1,
    comments: 0,
    progress: 100,
    deadline: moment().subtract(7, 'days'),
  },
];

const stories = storiesOf('KanBanBoard', module);
stories.addDecorator(withKnobs).add(
  'Kanban Board test',
  () => (
    <ThemeProvider theme={theme}>
      <KanBanBoard
        lists={object('list array', lists)}
        tasks={object('task array', tasks)}
      />
    </ThemeProvider>
  ),
  {
    notes:
      'Migrate all the src/components/KanbanBoard/*.js files to src/components/KanbanBoard/*.tsx. Use the dummy data in src/template/utils/axios.js (line 1284) to render the component in the storybook.',
  }
);
