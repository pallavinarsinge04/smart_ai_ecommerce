import { createContext, useState } from "react";
import { login } from "../services/authService";
import { setToken } from "../utils/token";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const loginUser = async (data) => {
        const res = await login(data);
        setUser(res.data.user);
        setToken(res.data.token);
    };

    return (
        <AuthContext.Provider value={{ user, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};