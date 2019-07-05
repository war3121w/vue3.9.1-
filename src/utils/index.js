//login图形验证码前端随机js
export function random() {
  const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 65; i < 122; i++) {
    if (i > 90 && i < 97) {
      continue;
    }
    // 接受一个指定的 Unicode 值，然后返回一个字符串
    random.push(String.fromCharCode(i));
    //现在这个数组包含1~9和a~z的了
  }
  let code = "";
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * 36); //暂定36种可能性
    code += random[index];
  }
  return code
}
