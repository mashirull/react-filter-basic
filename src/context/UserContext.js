import { createContext, useReducer , useContext, useEffect} from "react";
import reducer from '../reducer/UserReducer';
import axios from "axios";


const UserContext = createContext();

const api   ='https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users'

const UserContextProvider = ({children}) => {

    const initialState = {
        users : [],
        isUserdata : false,
        totalUsers : []
    }

    const [state , dispatch] = useReducer(reducer , initialState);

    const getUserData = async(url) => {
        dispatch({type : 'SET_LOADDER'})
        try {
            const res = await axios.get(url) 
            const userData = await res.data
            dispatch({type : 'SET_USERDATA' ,payload : userData})
        } catch (error) {
            dispatch({type : 'SET_ERROR' , payload : error})
        }
    }

    const searchHandler = (event) => {
        let value = event.target.value;

        console.log(value)
        dispatch({type : 'SET_SEARCH_FILTER' , payload : value})
    }

    useEffect(()=>{
        getUserData(api)
    },[])


    return <UserContext.Provider value={{...state , searchHandler}}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () => {
    return useContext(UserContext)
}


export {useUserContext , UserContextProvider}