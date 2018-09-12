const process = require('process');
const render = require('drone-render');
const request = require('request-promise-native');

const {
  WECHAT_KEY,
  PLUGIN_KEY,

  PLUGIN_MSG_TYPE,
  PLUGIN_MESSAGE
} = process.env;

function sendMsgFromWork() {
  // http://work.weixin.qq.com/api/wap/doc/index?st=6602468649AB21D1B6CE193837E07604E76BB78B37BC2DCD16D3E5903A1CB1A7955076CF38DF30DC7EB06E38868FFC0DF818CC083F448E06C8B9FCAE90B3A9F1EEBE21C416B3C49BEEB52F7D87255C55CEA06CC1350B99BDA8B0135F1E5117FD5A988E6BD3F81ED5FC0BA2503CACC36C033372500520672EED9C4857AC2F0054D7B7B8CF8C291D269FF27906D99FE2B6&vid=1688850523201489&version=2.4.991.1303&platform=win#14404

  const KEY = PLUGIN_KEY || WECHAT_KEY;
  const MSG_TYPE = PLUGIN_MSG_TYPE || 'text';
  const MESSAGE = render(PLUGIN_MESSAGE);

  let body = {
    msgtype: MSG_TYPE
  }
  if (MSG_TYPE == 'text') {
    body.text = {
      content: MESSAGE
    }
  } else {
    body.markdown = {
      content: MESSAGE
    }
  }

  return request({
    method: 'POST',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/message/send',
    qs: {
      key: KEY
    },
    body,
    json: true
  });
}

function sendMsgFromWechat() {
  return getAccessToken()
    .then(sendMsgFromWork)
    .catch(err => {
      console.error(err);
    });
}

sendMsgFromWechat();
module.exports = {
  getAccessToken,
  sendMsgFromWork,
  sendMsgFromWechat
};
