import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ChatIcon from '@material-ui/icons/Chat';
import StackAvatars from 'template/components/StackAvatars';
import GenericMoreButton from 'template/components/GenericMoreButton';
import { Theme } from 'template/theme';
import { Task } from 'components/KanbanBoard/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    outline: 'none',
    marginBottom: theme.spacing(2),
  },
  isDragging: {},
  content: {
    paddingTop: 0,
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
  },
  flexGrow: {
    flexGrow: 1,
  },
  files: {
    color: theme.palette.icon,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  comments: {
    color: theme.palette.icon,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    marginLeft: theme.spacing(2),
  },
  progress: {
    marginTop: theme.spacing(2),
  },
}));

type Props = {
  className?: string;
  onOpen: Function;
  provided: any;
  snapshot: any;
  style?: any;
  task: Task;
};

const TaskListItem: React.FC<Props> = props => {
  const {
    task,
    // eslint-disable-next-line no-unused-vars
    onOpen,
    provided,
    snapshot,
    className = '',
    style,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={clsx(
        classes.root,
        {
          [classes.isDragging]: snapshot.isDragging,
        },
        className
      )}
      style={{ ...style, ...provided.draggableProps.style }}
    >
      <CardHeader
        action={<GenericMoreButton />}
        subheader={`#${task.ref}`}
        subheaderTypographyProps={{ variant: 'overline' }}
        title={task.title}
        titleTypographyProps={{ variant: 'h5', gutterBottom: true }}
      />
      <CardContent className={classes.content}>
        <div className={classes.stats}>
          <StackAvatars avatars={task.members} limit={4} />
          {task.files > 0 && (
            <div className={classes.files}>
              <AttachFileIcon />
            </div>
          )}
          {task.comments > 0 && (
            <div className={classes.comments}>
              <ChatIcon />
            </div>
          )}
          <div className={classes.flexGrow} />
          <Typography
            className={classes.date}
            color="textSecondary"
            variant="body2"
          >
            {moment(task.deadline).format('D MMM')}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TaskListItem.defaultProps = {
  style: {},
  onOpen: () => {},
};

export default TaskListItem;
