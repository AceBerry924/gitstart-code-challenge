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
  members?: string[] | null;
  files: number;
  comments: number;
  progress: number;
  deadline: Moment;
}
