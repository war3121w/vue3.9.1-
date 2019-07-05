import jsonp from '@/utils/jsonp'

const options = {
  timeout: 10000,
  name: 'jsonpcallback'
}
// ukey 加载第一步
export function loadUkeyFileStep1() {
  const url = 'http://127.0.0.1:17681'
  const data = {
    json: JSON.stringify({
      sn: 0,
      function: 'InitiateLock'
    })
  }
  return jsonp(url, data, options)
}

// ukey 加载第二步
export function loadUkeyFileStep2(rand) {
  const url = 'http://127.0.0.1:17681'
  const data = {
    json: JSON.stringify({
      sn: 0,
      rand,
      function: 'Lock32_Function'
    })
  }
  return jsonp(url, data, options)
}