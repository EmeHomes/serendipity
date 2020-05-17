export interface TaskModel {
  id: number;
  name: string;
  description: string;
  start_date: string;
  finish_date: string;
  status: { id: number, name: string };
  user_id: number;
}
