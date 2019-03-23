import { Component } from '@angular/core';
import { Comment } from '../class/comment';
import { User } from '../class/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
  // comments = COMMENTS;
  content = '';
  currentUser = CURRENT_USER;
  item: Observable<any>;
  comments: Observable<any>;
  commentsRef: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) {
    this.item = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    this.comments = this.commentsRef.valueChanges();
  }

  addComment(comment: string): void {
    // console.log(index);
    if (comment) {
      this.commentsRef.push(new Comment(this.currentUser, comment));
      this.content = '';
    }
  }
}
