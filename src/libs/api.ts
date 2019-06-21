let fetch = require("node-fetch");

export const getApi: any = (url: string, query: string, variables: any = null) => {
  console.log(url)
  return new Promise((resolve: any, reject: any) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
      .then((r: any) => r.json())
      .then((res: { errors: any, data: any }) => {
        if (res.errors) { reject(res.errors); return }
        resolve(res.data)
      })
      .catch((e: any) => { alert('网络请求错误'); });
  })
}