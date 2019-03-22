import { User } from './user';
import { format } from 'date-fns';

export class Comment {
  user: User;
  message: string;
  date: string;

  constructor(user: User, message: string) {
    this.user = user;
    this.message = message;
    this.date = format(new Date());
  }
}
