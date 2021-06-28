// import * as region from '@/assets/js/region'

// 将yyyy-MM-dd hh:mm:ss转换为Date对象
const parseDate = (date) => {
  return new Date(date.substring(0, 4), parseInt(date.substring(5, 7)) - 1, date.substring(8, 10), date.substring(11, 13), date.substring(14, 16), date.substring(17))
}

/**  字符串去空 */
const trimStr = (str) => {
  return str.replace(/^\s+|\s+$/gm, '')
}

/** 浅拷贝 */
const extend = (destination, source) => {
  for (var property in source) {
    destination[property] = source[property]
  }
}

// date转换成指定日期格式
// 兼容ie
const dateFormat = function (date, format) {
  var time
  if (!date) return ''
  if (typeof date === 'string') {
    time = new Date(date.replace(/-/g, '/').replace(/T|Z/g, ' ').trim())
  } else if (typeof date === 'object') {
    time = new Date(date)
  }
  var o = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    'S': time.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return format
}

// 数组过滤（匹配某菜单下所有方法）
const filterarr = function (sysId, menuId) {
  let array = JSON.parse(localStorage.getItem('FUNCTIONS'))
  let newArr = array.filter(item =>{
    return item.SysId === sysId && item.MenuId === menuId
  })
  return newArr
}

// 时间转换
const parseTime = function (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

// 时间戳转年月日时分秒
const getYMDHMS = function (timestamp) {
  if (typeof (timestamp) == 'undefined') {
      return ''
  } else {
    let date = new Date(parseInt(timestamp))
    let y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? ('0' + MM) : MM
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let m = date.getMinutes()
    m = m < 10 ? ('0' + m) : m
    let s = date.getSeconds()
    s = s < 10 ? ('0' + s) : s
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
  }
}
// date 代表指定的日期，格式：2018-09-27
// day 传-1表始前一天，传1表始后一天
// JS获取指定日期的前一天，后一天
const getPrevDate = function (date, day) {
　　var dd = new Date(date);
　　dd.setDate(dd.getDate() + day);
　　var y = dd.getFullYear();
　　var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
　　var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
　　return y + "-" + m + "-" + d;
}

// 判断某一时间是否在一个时间段内
const isDuringTime = function (now, start, end) {
　　let curTime = parseDate(now)
    let beginTime = parseDate(start)
    let endTime = parseDate(end)
    if ( curTime >= beginTime && curTime <= endTime) {
      return true
    } else {
      return false
    }
}

/*
 * 根据数组对象属性删除对应项
 * @param {Array} arr - 数组对象
 * @param {String} attr - 属性
 * @param {} value - 属性值
 * @return void
 */
const removeByValue = function(arr, attr, value) {
  var index=0;
  for(var i in arr){
    if(arr[i][attr]==value){
      index=i;
      break;
    }
  }
  arr.splice(index,1);
}

/*时间差*/
const getDateDiff = function(startTime, endTime, diffType) {
  //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
  //将计算间隔类性字符转换为小写
  if(startTime){
    let str1 = startTime.replace(/-/g,'/')
    startTime = str1.replace('T','/')
  }
  if(endTime){
    let str2 = endTime.replace(/-/g,'/')
    endTime = str2.replace('T','/')
  }
  var sTime = new Date(startTime); //开始时间
  var eTime = new Date(endTime); //结束时间
  //作为除数的数字
  var divNum = 1;
  switch (diffType) {
    case "second":
      divNum = 1000;
      break;
    case "minute":
      divNum = 1000 * 60;
      break;
    case "hour":
      divNum = 1000 * 3600;
      break;
    case "day":
      divNum = 1000 * 3600 * 24;
      break;
    default:
      break;
  }
  return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
}

export {parseDate, trimStr, extend, dateFormat, filterarr, parseTime, getPrevDate, isDuringTime, removeByValue, getYMDHMS, getDateDiff}
