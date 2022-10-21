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
      case 'signIn':
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
