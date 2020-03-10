import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    userSelect: 'none',
    whiteSpace: 'normal',
    height: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    verticalAlign: 'top',
    width: 500,
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  isDraggingOver: {},
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0.5, 2),
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
  },
  counter: {
    marginLeft: theme.spacing(1),
  },
  headerAction: {
    marginLeft: 'auto',
  },
  content: {
    flexGrow: 1,
    overflowY: 'hidden',
  },
  inner: {
    padding: theme.spacing(2, 3),
  },
}));

type Props = {
  children: React.ReactNode;
  className?: string;
  provided: any;
  snapshot: any;
  title: string;
  total: number;
};

const TaskList: React.FC<Props> = props => {
  const {
    title,
    total,
    provided,
    snapshot,
    className = undefined,
    children,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
      ref={provided.innerRef}
    >
      <div className={classes.header}>
        <Typography color="inherit" variant="h5">
          {title}
        </Typography>
        <Typography className={classes.counter} color="inherit" variant="h6">
          - {total}
        </Typography>
        <div className={classes.headerAction}>
          <Tooltip title="Add task">
            <IconButton color="inherit" edge="end">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div
        className={clsx(classes.content, {
          [classes.isDraggingOver]: snapshot.isDraggingOver,
        })}
      >
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <div className={classes.inner}>{children}</div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default TaskList;
