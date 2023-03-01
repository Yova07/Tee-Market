import { useState } from "react";
import { useAuthContext } from "../context/UserContext";
import axios from "axios";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (newUser) => {
        setLoading(true);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/signup`, newUser);

            localStorage.setItem('session_user', response.data.token);
            setLoading(false);
            setError(null);
            dispatch({ type: 'LOGIN', payload: response.data });

        } catch (error) {
            setError(error);
            setLoading(false);
        }  
    }

    return { signup, loading, error, setError };
}