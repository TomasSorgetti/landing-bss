import { users } from "./user.mock"


export const signIn = (email, password) => {
    //* Si no hay email o contraseña retorna un error 400
    if (!email || !password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ error: true, status: 400, message: "Email y contraseña son requeridos" })
            }, 500)
        })
    }

    //* Busca el usuario
    const user = users.filter((user) => user.email == email)[0]


    //* Si el usuario no existe retorna un 404
    if (!user) { 
        return new Promise((resolve) => {
            setTimeout(() => { 
            resolve({ error: true, status: 404, message: "Usuario no encontrado" })
        }, 500)
    })
    }

    //* Compara contraseñas
    const match = user.password === password

    //* Si no matchea devuelve un error 401
    if (!match) { 
        return new Promise((resolve) => {
            setTimeout(() => { 
            resolve({ error: true, status: 401, message: "Contraseña incorrecta" })
        }, 500)
    })
    }

    //* Si matchea devuelve un token
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ error: false, status: 200, token: "123456789" })
        }, 1000)
    })
}