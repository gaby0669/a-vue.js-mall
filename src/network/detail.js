import {request} from './request'

export function getDetail(iid){
  return request({
    url : '/detail',
    params: {
      iid
    }
  })
}

// 获取推荐信息
export function getDetailRecommend() {
  return request({
    url: "/recommend",
    methods: "GET"
  });
}
// 把轮播图下方的数据用对象存储起来
export class Goods{
  constructor(itemInfo, columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount=itemInfo.discountDesc;
    this.columns = columns
    this.services = services 
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

// 商家信息
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    // this.fans = shopInfo.cFans
    this.sells=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goodsCount=shopInfo.cGoods;
  }
}
// 商品参数
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
