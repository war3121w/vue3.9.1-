var socket_suciz;
var socket_suciz_lock32;
var ref;
import { Message } from 'element-ui';


export default {
  getSetSn: function () {
    var sn = 0;
    return sn;
  },
  Lock32_Function: function (rand, sn, callback) {
    var sn = this.getSetSn();
    var oJson = { "function": "InitiateLock", "sn": sn };
    var sJson = JSON.stringify(oJson);

    var sStatus;

    $.ajax(
      {
        url: 'http://127.0.0.1:17681',
        data: 'json=' + sJson,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        cache: false,
        async: false
      }).
      done(function (ojson) {
        if (ojson[0].ret == true) {
          var oJsonLock = { "function": "Lock32_Function", "sn": sn, "rand": rand };
          var sJsonLock = JSON.stringify(oJsonLock);
          $.ajax(
            {
              url: 'http://127.0.0.1:17681',
              data: 'json=' + sJsonLock,
              dataType: "jsonp",
              jsonp: "callback",
              jsonpCallback: "jsonpcallback",

            }).
            done(function (ojson) {

              var sjson = JSON.stringify(ojson[0]);
              sStatus += sjson;
              socket_suciz_lock32 = ojson[0].lock;
              callback(socket_suciz_lock32)
            })
        }
      })
      .fail(function () {
        Message({
          showClose: true,
          message: '很抱歉！系统检测到您的Ukey控件异常，现已失效，请重新安装。',
          type: 'warning'
        });
      });

    var pac = 0;
    pac += 9;
  }
}





