import { Component } from '@angular/core';
import { Comment } from '../class/comment';

const COMMENTS: Comment[] = [
  { name: '山本 剛史', message: 'お疲れ様です！' },
  { name: '鈴木 敦', message: 'この前の件ですが、どうなりましたか？' },
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  comments = COMMENTS;
  content = '';


  addComment(comment: string): void {
    // console.log(index);
    if (comment) {
      this.comments.push(new Comment('山本 剛史', comment));
    }
    this.content = '';
  }
}
