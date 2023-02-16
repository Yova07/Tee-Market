import axios from "axios";
import { useState } from "react"
import { useAuthContext } from "../context/UserContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (user) => {
        setLoading(true);

        try {
            const response = await axios.post('/api/user/login', user);

            localStorage.setItem('session_user', response.data.token);
            setLoading(false);
            setError(null);
            dispatch({ type: 'LOGIN', payload: response.data })

        } catch(error) {
            setError(error);
            setLoading(false);
        }
    }

    return { login, error, loading };
}