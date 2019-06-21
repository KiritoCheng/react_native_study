export const getApi: any = (url: string, query: string, variables: any = null) => {
  return new Promise((resolve: any, reject: any) => {
    console.log(url);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        "query": `${query}`,
        "variables": `${variables}`
      })
    }).then((r: any) => r.json())
      .then((res: { errors: any, data: any }) => {
        alert('请求su');
        if (res.errors) { reject(res.errors); return }
        resolve(res.data)
      })
      .catch((e: any) => { alert('网络请求错误'); });
  })
}
