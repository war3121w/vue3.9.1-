/**
 * 过滤字数20个字
 * @param {*} value 
 */
export function ellipsis20(value) {
  if (!value) return
  if (value.length > 20) {
    return value.slice(0, 20) + '...'
  }
  return value
}
/**
 * 过滤字数并过滤掉空格
 * @param {*} value 
 */
export function ellipsis(value, num) {

  if (!value) return
  let news = value.replace(/ /g, '')
  if (news.length > num) {
    return news.slice(0, num) + '...'
  }
  return news
}


/**
 * 过滤字数15个字
 * @param {*} value 
 */
export function ellipsis15(value) {
  if (!value) return
  if (value.length > 15) {
    return value.slice(0, 15) + '...'
  }
  return value
}

/**
 * 保留三个字段一个逗号，没有小数点后2位
 * @param {*} value 
 */
export function DetailFormat(value) {
  if (!value) return '--'
  return Number(value).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
}

/**
 * 过滤时：分：秒--用在首页的个人首页下：倒计时打卡专用
 * @param {*} value 
 */
export function hourFormat(value) {
  if (!value) return
  return moment(value).format('HH:mm:ss')
}

//过滤人民币三字单位一个逗号并且保留小数点后两位
export function NumFormat(val) {
  if (val === '' || val == null || val === '--') return "--"
  val = val.toString().replace(/\$|\,/g, '');
  if (isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + val + '.' + cents);
}

//过滤人民币三字单位一个逗号并且保留小数点后两位,同时过滤0的时候也是--
export function NumFormatWork(val) {
  if (val === '' || val == null || val == 0) return "--"
  val = val.toString().replace(/\$|\,/g, '');
  if (isNaN(val)) {
    val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if (cents < 10) {
    cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + val + '.' + cents);
}

