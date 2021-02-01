import Toast from './Toast'

const _toast = {}

_toast.install = function(Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //2.new方式, 根据组件构造器, 可以创建出来一个组件
  const toast = new toastConstructor();
  //3.将组建对象, 手动挂载到某个节点上
  toast.$mount(document.createElement('div'));
  //4.toas.$el对应的就因该时div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;  //给Vue原型添加$toast属性 所有Vue对象实例(组件)都可使用
}

export default _toast