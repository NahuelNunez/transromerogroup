import { useEffect } from "react";
import { useAuth } from "../store/useAuth";




export const useInitializeAuth = () => {
    const { loadUserFromLocalStorage } = useAuth()
    useEffect(() => {
        loadUserFromLocalStorage()
    }, [loadUserFromLocalStorage])

}
export default useAuth;
