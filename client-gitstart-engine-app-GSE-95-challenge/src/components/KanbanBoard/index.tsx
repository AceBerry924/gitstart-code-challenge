import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import Page from 'template/components/Page';
import Header from './Header';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskDetails from './TaskDetails';
import { Theme } from 'template/theme';
import { Props } from 'components/KanbanBoard/types';

const useStyles = makeStyles<Theme>((theme) => ({
	root: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	container: {
		flexGrow: 1,
		padding: theme.spacing(0, 3, 3, 1),
		overflowX: 'auto',
		overflowY: 'hidden',
		whiteSpace: 'nowrap'
	}
}));

const KanbanBoard: React.FC<Props> = (props) => {
	const { lists, tasks } = props;
	const classes = useStyles();

	const [ boardLists, setBoardLists ] = useState([] as any);
	const [ openedTask, setOpenedTask ] = useState(null);

	useEffect(() => {
		const tempLists = [];

		// eslint-disable-next-line no-restricted-syntax
		for (const list of lists) {
			tempLists.push({ ...list, items: [] as any });
		}

		// eslint-disable-next-line no-restricted-syntax
		for (const task of tasks) {
			tempLists.forEach((list) => {
				if (list.id === task.listId) {
					list.items.push(task);
				}
			});
		}

		setBoardLists(tempLists);
	}, []);

	const handleDragEnd = (event: any) => {
		const { source, destination } = event;

		if (!destination) {
			return;
		}

		const newLists = _.clone(boardLists);
		const sourceList = newLists.find((list: any) => list.id === source.droppableId);
		const destinationList = newLists.find((list: any) => list.id === destination.droppableId);
		const [ removedItem ] = sourceList.items.splice(source.index, 1);

		if (source.droppableId === destination.droppableId) {
			sourceList.items.splice(destination.index, 0, removedItem);
			setBoardLists(newLists);
		} else {
			removedItem.list = destination.droppableId;
			destinationList.items.splice(destination.index, 0, removedItem);
			setBoardLists(newLists);
		}
	};

	const handleListAdd = () => {
		const list = {
			id: uuid(),
			title: 'New list',
			items: []
		};

		setBoardLists((prevLists: any) => [ ...prevLists, list ]);
	};

	const handleTaskOpen = (task: any) => {
		setOpenedTask(task);
	};

	const handleTaskClose = () => {
		setOpenedTask(null);
	};

	return (
		<Page className={classes.root} title="Kanban Board">
			<Header onListAdd={handleListAdd} />
			<div className={classes.container}>
				<DragDropContext onDragEnd={handleDragEnd}>
					{boardLists.map((list: any) => (
						<Droppable droppableId={list.id} key={list.id}>
							{(provided, snapshot) => (
								<TaskList
									provided={provided}
									snapshot={snapshot}
									title={list.title}
									total={list.items.length}
								>
									{list.items.map((task: any, index: any) => (
										<Draggable draggableId={task.id} index={index} key={task.id}>
											{(provided, snapshot) => (
												<TaskListItem
													onOpen={() => handleTaskOpen(task)}
													provided={provided}
													snapshot={snapshot}
													task={task}
												/>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</TaskList>
							)}
						</Droppable>
					))}
				</DragDropContext>
			</div>
			<TaskDetails onClose={handleTaskClose} open={Boolean(openedTask)} task={openedTask} />
		</Page>
	);
};

export default KanbanBoard;
