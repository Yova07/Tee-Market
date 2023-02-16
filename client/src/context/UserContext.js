import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        case 'UPDATE':
            return { user: action.payload }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    const [active, setActive] = useState(false);

    useEffect(() => {
        const userToken = localStorage.getItem('session_user');

        const fetch = async () => {
            const response = await axios.get('/api/user/user', {
                headers: {
                    authorization: `Bearer ${userToken}`
                }
            })

            dispatch({ type: 'LOGIN', payload: { ...response.data }});
        }

        if(userToken) {
            fetch()
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch, active, setActive }}>
            {children}
        </AuthContext.Provider>
    )
}