import {request} from './request'

//请求详情
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//商品推荐数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

//商品基本信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.desc = itemInfo.desc;
    this.columns = columns;
    this.services = services;
  }
}

//商铺信息
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}