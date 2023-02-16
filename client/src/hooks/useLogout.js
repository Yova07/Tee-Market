import { useAuthContext } from "../context/UserContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        localStorage.removeItem('session_user');

        dispatch({ type: 'LOGOUT' })
    }

    return { logout };
}