export const cleanContainer = (id: string) => {
  const element = document.querySelector(`${id}`) as HTMLElement | null
  if (element != null) {
    element.innerHTML = ''
  } else {
    throw new Error(`cannot clean ${id} container`)
  }
}

export const getPrevPage = () => {
  const currentPage = localStorage.getItem('page')
  let prevPage = ''
  if (currentPage != null) {
    switch (currentPage) {
      case 'signUp':
        prevPage = 'login'
        break
      case 'hub-games':
        prevPage = 'login'
        break
    }
  }
  return prevPage
}

export const getInputValue = (attr: string) => {
  const input = document.querySelector(attr) as HTMLInputElement | null
  let value = ''
  if (input != null) {
    value = input.value
  }
  return value
}

export const printErrorMsg = (attr: string, text: string) => {
  const element = document.querySelector(attr) as HTMLElement | null
  if (element !== null) {
    element.textContent = text
  }
}

export const activateElement = (attr: string, state: boolean) => {
  const element = document.querySelector(attr) as HTMLInputElement | null
  if (element !== null) {
    element.disabled = state
  }
}

type User = {
  name: string
  pw: string
  id: string
}

export const checkUser = (prop: string, list: User[], val: string) => {
  return list.findIndex((user) => user[prop as keyof User] === val)
}
