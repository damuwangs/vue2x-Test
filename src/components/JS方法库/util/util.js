
/*
	* 将秒转换为 时分
	* s int 秒数
*/
function secondToTime(s) {
	let theTime = parseInt(s);// 秒
	let middle = 0;// 分
	let hour = 0;// 小时

	if(theTime > 60) {
		middle = parseInt(theTime / 60);
		theTime = parseInt(theTime % 60);
		if(middle > 60) {
			hour = parseInt(middle / 60);
			middle = parseInt(middle % 60);
		}
	}
	let result = "" + parseInt(theTime) + "秒";
	if(middle > 0) {
		result = "" + parseInt(middle) + "分钟";
	}
	if(hour> 0) {
		result = "" + parseInt(hour) + "小时" + result;
	}
	return result;
}

/*
* 获取当前年月日时分秒
*/
function gettime() {
	let dateTime
	let yy = new Date().getFullYear()
	let mm = new Date().getMonth() + 1
	let dd = new Date().getDate()
	let hh = new Date().getHours()
	let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes()
		:
		new Date().getMinutes()
	let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds()
		:
		new Date().getSeconds()
	dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
	return dateTime
}

/*
* 13位时间戳转年月日时分秒
*/
function timestampToTime(timestamp) {
		var date = new Date();//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear();
		var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
		var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
		var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours());
		var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
		var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
		strDate = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
		return strDate;
}

/*
* 简单的数字转换汉字大写
*/
function NumberToChineseSimple(str) {
	let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
	let cArr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点']
	str = str.replace(/0/g, '零')
	str = str.replace(/1/g, '一')
	str = str.replace(/2/g, '二')
	str = str.replace(/3/g, '三')
	str = str.replace(/4/g, '四')
	str = str.replace(/5/g, '五')
	str = str.replace(/6/g, '六')
	str = str.replace(/7/g, '七')
	str = str.replace(/8/g, '八')
	str = str.replace(/9/g, '九')
	str = str.split('.').join('点')
	return str
}


function NumberToChineseSimpleANDNumberToChinese(str){
	str = str.split('.')
	let str2 = ''
	if(str[0]) {
		str2 = NumberToChinese(str[0])
	}
	if(str[1]) {
		str2 = str2 + '点' + NumberToChineseSimple(str[1])
	}
	return str2
}

/*
* 数字转换汉字大写（里面带有时间）
*/
function NumberToChineseHasTime(str) {
	let str2 = ''
	if(str.split('小时').length == 2) {
		str2 = NumberToChinese(parseInt(str.split('小时')[0])) + '小时' + NumberToChinese(parseInt(str.split('小时')[1])) + '分钟'
	} else {
		str2 = NumberToChinese(parseInt(str)) + '分钟'
	}
	return str2
}

/**
 * 数字转换汉字大写
 */
function NumberToChinese(money){
    //汉字的数字
    var cnNums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    //基本单位
    var cnIntRadice =['', '拾', '佰', '仟'];
    //对应整数部分扩展单位
    var cnIntUnits = ['', '万', '亿', '兆'];
    //对应小数部分单位
    var cnDecUnits = ['角', '分', '毫', '厘'];
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money == '') { return ''; }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return '';
    }
    if (money == 0) {
        chineseStr = cnNums[0];

        return chineseStr;
    }

    //转换为字符串
    money = money.toString();

    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        // decimalNum = parts[1].substr(0, 4);
        decimalNum = parts[1].substring(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            // var n = integerNum.substr(i, 1);
            var n = integerNum.substring(i, i+1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += '';
    }
    //小数部分
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
            // var n = decimalNum.substr(i, 1);
            var n = decimalNum.substring(i, i+1);
            if (n != '0') {
                // chineseStr += cnNums[Number(n)] + cnDecUnits[i];
                chineseStr += cnNums[parseInt(n)] ;
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0];
    } else if (decimalNum == '') {
        chineseStr += '';
    }

    return chineseStr;
}
// 计算数组中元素重复出现的次数
function getRepeatNum(arr){ 
	var obj = {}; 
	for(var i= 0, l = arr.length; i< l; i++){ 
		var item = arr[i]; 
		obj[item] = (obj[item] +1 ) || 1; 
	} 
	return obj; 
}
// 乘客接送地址处理
function getPassengersAddress (PassengersList, isBack, orderStatus) {
	let SequenceList = []
	// 获取乘客排序
	PassengersList.forEach((item) => {
		// 历史订单列表显示所有信息
		if(orderStatus == -1){
			if (item.VerifyStatus){
				SequenceList.push(item.Sequence)
			}
		}else{
			// 不显示已取消乘客地址
			if (item.VerifyStatus!==3 || orderStatus == 5){
				SequenceList.push(item.Sequence)
			}
		}
	})
	// 乘客排序去重
	let SequenceArr = unique(SequenceList)
	let newArr = []
	PassengersList.forEach((item) => {
		SequenceArr.forEach((items, index) => {
			if(item.Sequence == items) {
				newArr[index] = item
			}	
		})
	})
	let countArr = getRepeatNum(SequenceList)
	let addressArr = []
	newArr.forEach((item, index) => {
		for(i in countArr) {
			if (item.Sequence == i) {
				if (isBack == 0) { //送机
					// 该地址人数多于1人时显示人数
					let DepAddressAndCount = ''
					if (item.DepAddress) {
						DepAddressAndCount = countArr[i] > 1 ? item.DepAddress+' '+countArr[i]+'(人)' : item.DepAddress
					} else {
						DepAddressAndCount = countArr[i] > 1 ? ' '+countArr[i]+'(人)' : ' '
					}
					addressArr.push(DepAddressAndCount)
					// 送机最后一个人的目的地是机场
					if (index == newArr.length - 1) {
						addressArr.push(item.ArrAddress)
					}
				} else { // 接机
					if (index == 0) {
						addressArr.push(item.DepAddress)
					}
					let ArrAddressAndCount = ''
					if (item.ArrAddress) {
						ArrAddressAndCount = countArr[i] > 1 ? item.ArrAddress+' '+countArr[i]+'(人)' : item.ArrAddress
					} else {
						ArrAddressAndCount = countArr[i] > 1 ? ' '+countArr[i]+'(人)' : ' '
					}
					addressArr.push(ArrAddressAndCount)
				}
			}
		}
	})	
	return addressArr
}

// 数组去重
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}

module.exports = {
	secondToTime,
	NumberToChinese,
	NumberToChineseSimple,
	NumberToChineseHasTime,
	NumberToChineseSimpleANDNumberToChinese,
	gettime,
	timestampToTime,
	getPassengersAddress
}
