import { createContext, useState } from "react"

export const userContext = createContext(null)




const UserContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const LoginUser = () => {
        setIsLogin(true)
    }
    const LogoutUser = () => {
        setIsLogin(false)
    }
    const contextValue = { LoginUser, LogoutUser, isLogin }

    return (
        <userContext.Provider value={contextValue}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider
