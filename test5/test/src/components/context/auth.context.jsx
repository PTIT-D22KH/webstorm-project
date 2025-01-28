import {createContext, useState} from "react";

export const AuthContext = createContext(
    {
        email: "",
        fullName: "",
        password: "",
        phoneNumber: "",
        avatar: "",
        id: ""
    }
);

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        fullName: "",
        password: "",
        phoneNumber: "",
        avatar: "",
        id: ""
    })
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}

        </AuthContext.Provider>
    )
}

