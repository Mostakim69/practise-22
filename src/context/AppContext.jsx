import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "$";
    const navigate = useNavigate();
    const {user} = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(false)
    const [showPlaceReg, setShowPlaceReg] = useState(false)
    const [searchedCities, setSearchedCities] = useState([])

    const fetchUser = async () => {
        try {
           const {data} = await axios.get('/api/user', {headers: {Authorization: `Bearer ${await getToken()}`}})
           if (data.success){
            setIsOwner(data.role === "placeOwner")
            setSearchedCities(data.recentSearchedCities)
           } else {
            setTimeout(()=>{
                fetchUser()
            },5000)
           }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=> {
        if (user) {
            fetchUser();
        }
    },[user]);
    const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios, showPlaceReg, setShowPlaceReg, searchedCities, setSearchedCities
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> useContext(AppContext);