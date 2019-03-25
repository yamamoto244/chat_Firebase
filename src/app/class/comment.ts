import { User } from './user';
import { format } from 'date-fns';

export class Comment {
  user: User;
  message: string;
  date: string;
  key?: string;
  isEdit: boolean;

  constructor(values: any) {
    this.user = values.user;
    this.message = values.message;
    this.date = values.date || (new Date());
    if (values.key) { this.key = values.key; }
  }
}
