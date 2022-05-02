import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () => {},
    onLogin: (email, password) => {}
});

export const AuthContextComponent = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const checkAuth = localStorage.getItem("isloggedIn");
        if(checkAuth === '1'){
          return setIsLoggedIn(true);
        }
      },[]);

      const loginHandler = (email, password) => {
        localStorage.setItem("isloggedIn", '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
      };

    return <AuthContext.Provider value={{
        isLoggedIn : isLoggedIn,
        onLogout : logoutHandler,
        onLogin: loginHandler
    }}>
        {props.children}
    </AuthContext.Provider>

};

export default AuthContext;