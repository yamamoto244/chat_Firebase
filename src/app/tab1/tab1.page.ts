import { Component } from '@angular/core';
import { Comment } from '../class/comment';
import { User } from '../class/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const CURRENT_USER: User = new User(1, '山本 剛史');
const ANOTHER_USER: User = new User(2, '鈴木 敦');

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  content = '';
  currentUser = CURRENT_USER;
  comments: Comment[];
  commentsRef: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) {
    // this.item = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    // this.comments = this.commentsRef.valueChanges();
    this.commentsRef.snapshotChanges()
        .subscribe(snapshots => {
          this.comments = snapshots.map(snapshot => {
            const values = snapshot.payload.val();
            return new Comment({ key: snapshot.payload.key, ...values });
          });
        });
  }

  addComment(comment: string): void {
    // console.log(index);
    if (comment) {
      this.commentsRef.push(new Comment({ user: this.currentUser, message: comment }));
      this.content = '';
    }
  }

  deleteComment(key: string): void {
    this.commentsRef.remove(key);
  }
}
