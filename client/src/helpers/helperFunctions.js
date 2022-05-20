export const generateId = () => {
    return Math.random().toString(32).substr(2, 10)
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('token'))
}

export const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token))
    return token
}