// create context
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);


// context provider
export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    
    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    )
}


// hook for context provider - optional
function  useAuth () {
    const ctx = useContext(AuthContext);

    return (
        {
            isLogin: ctx.isLogin,
            setisLogin: ctx.setIsLgogin
        }
    )
}

export default useAuth