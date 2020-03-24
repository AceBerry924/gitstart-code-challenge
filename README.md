# gitstart-code-challenge
## Code Challenge for GitStart 

### GitStart Dashboard project Code Challenge

![alt text](https://ibb.co/y6rtcsP)

Welcome to the coding challenge! In this step you will be asked to complete a coding task using the zip: 
https://drive.google.com/file/d/17kzgQ478m-2XzM05AB5urHCdoCJwXoXk/view?usp=sharing



The high level objective of this task is to migrate a React component called KanbanBoard from JavaScript to Typescript 
and make it usable in the GitStart Dashboard.

Currently, the component exists in the following directory: src/template/views/KanbanBoard



First of all, copy the whole folder to the following directory: src/components/KanbanBoard

Migrate all the src/components/KanbanBoard/*.js files to src/components/KanbanBoard/*.tsx. 

Make sure to use Typescript types instead to PropTypes and try to follow conventions similar to the rest of the code base.

In the `KanbanBoard component`, currently there is fetchData hook that makes a rest call to get the data which is to 
be shown in the board. 
Please delete this hook and refactor the component so that it gets all this data from the component props. 
The types for the props should look like the following:

export interface Props {
 lists: List[];
 tasks: Task[];
}
export interface List {
 id: string;
 title: string;
}
export interface Task {
 id: string;
 ref: string;
 listId: string;
 title: string;
 desc: string;
 members?: (string)[] | null;
 files: number;
 comments: number;
 progress: number;
 deadline: Moment;
}

Add the KanbanBoard component in the `Storybook` (https://storybook.js.org/). 
You can use the dummy data in src/template/utils/axios.js (line 1284) to render the component in the storybook.



Lastly, please ensure make sure the following command run without any issues before submitting your work

`yarn`
`yarn run build`
`yarn run type-check`
`yarn run type-coverage`


In order to setup the project locally and instructions on how to add components to storybook, 
please read the file README.md found in the root directory of the project folder.

For further questions please refer to this FAQ: 
https://docs.google.com/document/d/1YW2W80ITd8EJAX89yHk08iT__GooFQ6OZOqBjYAQX2I/edit?usp=sharing

If you cannot find your answers in the FAQ please add a comment on the doc!
