import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'

export default {
  addCart(context, payload) {
    return new Promise(resolve => {
      //payload型添加的商品
      var OldProduct = null;
      OldProduct = context.state.cartList.find(item => item.iid === payload.iid);

      if (OldProduct != null) {
        context.commit(ADD_COUNTER, OldProduct); //必须在mutations执行才可被监听到
        resolve(`${OldProduct.title}:商品新增了数量+`);
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload); //必须在mutations执行才可被监听到
        resolve(`新增了商品:${payload.title}`);
      }
    })
  }
}