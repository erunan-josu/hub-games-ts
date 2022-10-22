import { v4 as uuid } from 'uuid'

export const getData = async (path: string) => {
  const data = await fetch(`http://127.0.0.1:3000/${path}`)
  const dataJSON = await data.json()
  return dataJSON
}
export const postUser = (path: string, name: string, pw: string) => {
  fetch(`http://127.0.0.1:3000/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      pw: pw,
      id: uuid(),
    }),
  })
}
