export function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  }
}

export function formatDate (date, fmt) {
  function padLeftzero(str) {
    return ('00' + str).substring(str.length);
  }

  if (/(y+)/.test(fmt))
    var result = fmt.replace(RegExp.$1, date.getFullYear()).substring(4 - RegExp.$1.length);

  let dateAttrs = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }

  for (let key in dateAttrs) {
    if (new RegExp(`(${key})`).test(result)) {
      let timeData = dateAttrs[key] + '';
      result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? timeData : padLeftzero(timeData));
    }
  } 

  return result;
}