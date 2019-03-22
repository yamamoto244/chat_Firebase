import { Component } from '@angular/core';
import { Comment } from '../class/comment';
import { User } from '../class/user';

const CURRENT_USER: User = new User(1, '山本 剛史');
const ANOTHER_USER: User = new User(2, '鈴木 敦');

const COMMENTS: Comment[] = [
  new  Comment(ANOTHER_USER, 'お疲れ様です！'),
  new  Comment(ANOTHER_USER, 'FireBase余裕でした！'),
  new  Comment(CURRENT_USER, 'お疲れ！'),
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  comments = COMMENTS;
  content = '';
  currentUser = CURRENT_USER;


  addComment(comment: string): void {
    // console.log(index);
    if (comment) {
      this.comments.push(new Comment(this.currentUser, comment));
    }
    this.content = '';
  }
}
