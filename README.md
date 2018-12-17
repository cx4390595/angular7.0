#记录要点

- {{}}差值表达式
- 开发思路：angular通过操作后台的数据来改变前台的页面而不是操作dom（jquery）
- [ ]属性表达式 ：[src]="imgSrc" 类似vue里的 :src="imgSrc" 动态绑定属性
- <>泛型：xxx.Observable<boolean> 泛型是布尔类型


##proucts 商品组件

- *ngFor: ```<div *ngFor="let item of products,let key = index"><span>{{item.xxxx}}{{key}}</span></div>```
	
###product.component.ts
	export class ProductComponent implements OnInit {]
		//2.定义数据集合
	  private products: Array<Product>;
	
	  constructor() {
	  }
	
	  ngOnInit() {
	    //3.注入数据内容
	    this.products = [
	      new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品,是我test演示", ["电子产品", "硬件设备"]),
	      new Product(2, "第二个商品", 2.99, 2.5, "这是第二个商品,是我test演示", ["图片"]),
	      new Product(3, "第三个商品", 3.99, 4.5, "这是第三个商品,是我test演示", ["食品", "水果", "即食"]),
	      new Product(4, "第四个商品", 4.99, 1.5, "这是第四个商品,是我test演示", ["衣服", "男装"]),
	      new Product(5, "第五个商品", 5.99, 3.5, "这是第五个商品,是我test演示", ["电子产品", "手机产品"]),
	      new Product(6, "第六个商品", 6.99, 0.5, "这是第六个商品,是我test演示", ["婴儿用品", "硬件设备"]),
	    ]
	  }
	
	}
	/*1.定义一个构造函数的数据类型*/
	export class Product {
	  constructor(
     	public id: number,
	    public title: string, /*商品名*/
	    public price: number, /*价格*/
	    public rating: number, /*评分*/
	    public desc: string, /*描述*/
	    public categories: Array<string>/*种类*/
	  ) {}
	}



##carousel 轮播图组件
###bootstrap轮播图和placeholder.com图片显示插件
	<div class="carousel slide" data-ride="carousel">
		
	<--指示器-->
	  <ol class="carousel-indicators">
	    <li class="active"></li>
	    <li></li>
	    <li></li>
	  </ol>

	  <div class="carousel-inner">
	    <div class="item active">

		<--placeholder.com图片-->
	    <img src="https://via.placeholder.com/800x300"  class="slide-image" alt="">
	    </div>

	    <div class="item">
	      <img src="https://via.placeholder.com/800x300"  class="slide-image" alt="">
	    </div>
	    <div class="item">
	      <img src="https://via.placeholder.com/800x300"  class="slide-image" alt="">
	    </div>
	  </div>

	<--左右按钮 样式和代码-->
	  <a class="left carousel-control" href="javascript:$('.carousel').carousel('prev')">
	    <span class="glyphicon glyphicon-chevron-left"></span>
	  </a>
	  <a class="right carousel-control" href="javascript:$('.carousel').carousel('next')">
	    <span class="glyphicon glyphicon-chevron-right"></span>
	  </a>
	</div>

##stars 星级评价组件
1. 如何显示实心或者空心：boostrap样式:  ```class="glyphicon glyphicon-star glyphicon-star-empty"```

2. 如何显示多个星星 ```<span *ngFor="let item of stars"></span>```

3. 如何让有些星显示实心有些显示空心 

	- 数据绑定：```class类名绑定"：[class.glyphicon-star-empty]="star"```当star里面class类名等于xxx的时候为true 显示
	- ```<span *ngFor="let star of stars,let key = index" class="glyphicon glyphicon-star " [class.glyphicon-star-empty]="star"></span>```

4. 如何把将商品组件的星级评价数据 传递到星级评价组件里面 

	- 数据绑定 product组件中传值 ```<app-stars [rating]="product.rating"></app-stars>```	
	- 接收数据 stars组件中接收 ```@input() private rating:number = 0 ```没有数据的时候默认值为0

5. 如何判断星星是空心还是实心
	
		export class StarsComponent implements OnInit {
		  private stars:boolean[];//1.定义stars为布尔类型的数组 用来显示隐藏
		  @Input() private rating:number = 0 ;//2.接收product组件传过来的星级评分
		  constructor() { }
		
		  ngOnInit() {
		    this.stars = [];
		    for(let i=0;i<5;i++){
		      this.stars.push(i>this.rating);//用i和this.rating比较 push布尔值true或者false进去
		    }
		    // this.stars = [false,false,true,true,true];//3.数组赋值
		  }
		}