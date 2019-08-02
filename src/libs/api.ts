export const getApi: any = (url: string, query: string, variables: any = null) => {
  return new Promise((resolve: any, reject: any) => {
    console.log('url', url);

    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        "query": query,
        "variables": variables
      })
    })
      .then(r => r.json())
      .then((res: { errors: any, data: any }) => {
        if (res.errors) { reject(res.errors); return }
        console.log(res.data)
        resolve(res.data)
      })
      .catch(error => {
        reject(error);
      });
  })
}
