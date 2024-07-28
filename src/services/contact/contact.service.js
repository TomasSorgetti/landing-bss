export const postContact = (data) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve({
                error: false,
                status: 200,
                message: "Message sent successfully"
            })
        }, 400);
    })
}