import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
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
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        try {
            const { data } = await axios.get('/api/tours')
            if (data.success) {
                setRooms(data.tours);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(data.message)
        }
    }

    const fetchUser = async () => {
        try {
           const {data} = await axios.get('/api/user', {headers: {Authorization: `Bearer ${await getToken()}`}})
           if (data.success){
            setIsOwner(data.role === "placeOwner");
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

    useEffect(()=> {
fetchTours();
    },[])
    const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios, showPlaceReg, setShowPlaceReg, searchedCities, setSearchedCities, tours, setTours
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> useContext(AppContext);