export const generateId = () => {
    return Math.random().toString(32).substr(2, 10)
}

export const getToken = () => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log('!!!!!!', token)
    return token
}

export const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token))
    return token
}