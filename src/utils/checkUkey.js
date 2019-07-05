import { loadUkeyFileStep1, loadUkeyFileStep2 } from '@/api/ukey'
import { Message } from 'element-ui';

function exit() {
  setTimeout(() => {
    this.$router.push({
      name: "login",
      path: "/login"
    });
    this.$cookie.delCookie("mobile");
    localStorage.clear();
    return;
  }, 500)
}

export async function checkUkey() {
  let random = localStorage.getItem("random");
  let step1Data = null;
  let step2Data = null;

  try {
    step1Data = await loadUkeyFileStep1();
  } catch (err) {
    Message({
      duration: 5 * 1000,
      message: "很抱歉！系统检测到您的Ukey控件异常，现已失效，请重新安装。",
      type: 'warning'
    });
    exit.call(this)
  }

  if (step1Data && step1Data[0] && step1Data[0].ret) {
    try {
      step2Data = await loadUkeyFileStep2(random);
      let ukey = step2Data[0].lock
      let bool = Number(ukey) != Number(localStorage.getItem("myUkey"));
      if (!ukey) {
        Message({
          duration: 5 * 1000,
          message: "检测到您的Ukey已经拔出或者操作超时，请检查并重新登录！",
          type: 'warning'
        });
        exit.call(this)
      } else if (bool) {
        Message({
          duration: 5 * 1000,
          message: "检测到您使用了别人的Ukey,请重新登录！",
          type: 'warning'
        });
        exit.call(this)
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    return false;
  }
}
