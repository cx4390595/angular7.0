import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;//2.定义数据集合
  private imgUrl = "https://via.placeholder.com/320x150";
  constructor() {
  }

  ngOnInit() {
    //3.数据内容
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

/*1.定义数据类型*/
export class Product {
  constructor(
    public id: number,
    public title: string, /*商品名*/
    public price: number, /*价格*/
    public rating: number, /*评分*/
    public desc: string, /*描述*/
    public categories: Array<string>/*种类*/
  ) {
  }
}
