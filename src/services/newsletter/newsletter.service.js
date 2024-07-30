export const suscribeNewsletter = (email) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve({error:false, message: "Suscribed"})
        }, 1500);
    })
}