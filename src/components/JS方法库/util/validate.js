// 手机号验证
export function validateFixedPhone (str) {
  const reg = /^1(3[0-9]|4[5,7,9]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,3,5,6,7,8]|8[0-9]|9[1,8,9])\d{8}$/
  return reg.test(str)
}


export function validPhone (rule, value, callback) {
  if (!value) {
    callback()
  } else if (!validateFixedPhone(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
// 网址校验
export function validateUrl (str) {
	const reg = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
	return reg.test(str)
}
export function validUrl (rule, value, callback) {
  if (!value) {
    callback()
  } else if (!validateUrl(value)) {
    callback(new Error('请输入正确的网页地址'))
  } else {
    callback()
  }
}
// 邮箱验证
export function validateEmail (str) {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return reg.test(str)
}

export function validEmail (rule, value, callback) {
  if (!value) {
    callback()
  } else if (!validateEmail(value)) {
    callback(new Error('电子邮箱有误，请重新输入！'))
  } else {
    callback()
  }
}

//身份证验证
export function checkIdNum(rule, value, callback) {
  // const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  // if (!value) {
  //   return callback(new Error('证件号码不能为空'))
  // } else if (!reg.test(value)) {
  //   return callback(new Error('请输入正确的证件号码'))
  // } else {
  //   callback()
  // }
  if (value){
    var coefficientArr = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
    var sum = 0;
    for (var i = 0; i < coefficientArr.length; i++) {
      var m = parseInt(value.charAt(i))
      if (typeof m === 'number' && !isNaN(m)) {
        m = m;
      } else {
        m = 0;
      }
      sum += m * coefficientArr[i];
    }
    var remainderArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var lastArr = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var matchDigit = "";
    for (var i = 0; i < remainderArr.length; i++) {
      var j = remainderArr[i];
      if (j == sum % 11) {
        matchDigit = lastArr[i];
      }
    }
    if (matchDigit == value.substr(value.length - 1,1)) {
      callback()
    } else {
      return callback(new Error('请输入正确的证件号码'))
    }
  } else {
    return callback()
  }
}
// 价格验证
export function validatePrice (rule, value, callback) {
  const reg = /^-?\d{1,6}(?:\.\d{1,2})?$/
  if (!value &&  value !== 0) {
    return callback(new Error('价格不能为空'))
  }if (value < 0) {
    return callback(new Error('价格不能为负数'))
  } else if (!reg.test(value)) {
    return callback(new Error('请输入0-100000，不超过两位小数的数字'))
  } else {
    callback()
  }
}
