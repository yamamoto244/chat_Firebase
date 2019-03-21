import { Component } from '@angular/core';


class Comment {
  name: string;
  message: string;
}

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


  onClickedSend(){
      // console.log(index);

}
}
