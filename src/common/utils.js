export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  }
}

Date.prototype.formatDate = function (fmt) {
  if(this == null)
    new TypeError('this is not defined or is null!');

  var o = Object(this);

  function padLeftzero(str) {
    return ('00' + str).substring(str.length);
  }

  if (/(y+)/.test(fmt))
    var result = fmt.replace(RegExp.$1, o.getFullYear()).substring(4 - RegExp.$1.length);

  let dateAttrs = {
    'M+': o.getMonth() + 1,
    'd+': o.getDate(),
    'h+': o.getHours(),
    'm+': o.getMinutes(),
    's+': o.getSeconds(),
  }

  for (let key in dateAttrs) {
    if (new RegExp(`(${key})`).test(result)) {
      let timeData = dateAttrs[key] + '';
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? timeData : padLeftzero(timeData));
    }
  } 

  return result;
}

const d = new Date().constructor

export const Date = d;