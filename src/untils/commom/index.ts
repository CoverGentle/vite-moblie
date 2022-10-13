
export {}
// 获取url中的字段
// export const getUrl = (url)=>{
//   url = url == null ? window.location.href : url
//   const search = url.substring(url.lastIndexOf('?') + 1)
//   const obj = {}
//   const reg = /([^?&=]+)=([^?&=]*)/g
//   search.replace(reg, (rs, $1, $2) => {
//     const name = decodeURIComponent($1)
//     let val = decodeURIComponent($2)
//     val = String(val)
//     obj[name] = val
//     return rs
//   })
//   return obj
// }


// export function getQueryObject(url) {
//   url = url == null ? window.location.href : url
//   const search = url.substring(url.lastIndexOf('?') + 1)
//   const obj = {}
//   const reg = /([^?&=]+)=([^?&=]*)/g
//   search.replace(reg, (rs, $1, $2) => {
//     const name = decodeURIComponent($1)
//     let val = decodeURIComponent($2)
//     val = String(val)
//     obj[name] = val
//     return rs
//   })
//   return obj
// }

export function getQueryString(name:string) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
  let context = '';
  if (r) context = r[2];
  return context ? context : '';
}