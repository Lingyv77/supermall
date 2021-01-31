export default {
  addCart(context, payload) {
    //payload型添加的商品
    var OldProduct = null;
    OldProduct = context.state.cartList.find(item => item.iid === payload.iid);

    if (OldProduct != null) {
      context.commit('add_counter', OldProduct); //必须在mutations执行才可被监听到
    } else {
      payload.count = 1;
      context.commit('add_to_cart', payload); //必须在mutations执行才可被监听到
    }
  }
}