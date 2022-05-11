export const generateId = () => {
    return Math.random().toString(32).substr(2, 10)
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('userToken'))
}

export const setToken = (token) => {
    localStorage.setItem('userToken', JSON.stringify(token))
}