import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  private stars:boolean[];//1.定义stars为布尔类型的数组 用来显示隐藏
  @Input() private rating:number = 0 ;//2.接收product组件传过来的星级评分
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=0;i<5;i++){
      this.stars.push(i>this.rating);
    }
    // this.stars = [false,false,true,true,true];//3.数组赋值
  }

}
