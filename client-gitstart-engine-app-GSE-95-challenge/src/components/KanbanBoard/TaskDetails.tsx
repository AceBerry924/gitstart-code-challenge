import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Modal, Card, CardContent, Typography } from '@material-ui/core';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 360,
    maxWidth: '100%',
  },
}));

type Props = {
  className?: string;
  onClose: () => void;
  open: boolean;
  task: any;
};

const TaskDetails: React.FC<Props> = props => {
  const { open, onClose, task, className = undefined, ...rest } = props;
  const classes = useStyles();

  if (!open) {
    return null;
  }

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body1">{task.desc}</Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

TaskDetails.displayName = 'TaskDetails';

TaskDetails.defaultProps = {
  open: false,
  onClose: () => {},
};

export default TaskDetails;
