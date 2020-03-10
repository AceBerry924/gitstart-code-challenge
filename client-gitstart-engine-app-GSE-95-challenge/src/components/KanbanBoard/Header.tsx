import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		padding: theme.spacing(3)
	}
}));

type Props = {
	className?: string;
	onListAdd: () => void;
};
const Header: React.FC<Props> = (props) => {
	const { onListAdd, className = undefined, ...rest } = props;
	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Grid alignItems="flex-end" container justify="space-between" spacing={3}>
				<Grid item>
					<Typography component="h2" gutterBottom variant="overline">
						Organization
					</Typography>
					<Typography component="h1" variant="h3">
						Kanban Board
					</Typography>
				</Grid>
				<Grid item>
					<Button color="primary" onClick={onListAdd}>
						Add list
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Header;
