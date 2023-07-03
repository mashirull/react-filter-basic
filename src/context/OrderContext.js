import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "../reducer/OrderReducer";
import axios from "axios";


const OrderContext = createContext()

const API = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'

const OrderContextProvider = ({children}) => {

    const initialState = {
        allOrder : [],
        isLoading : false,
        isChecked : [true ,true , true , true],
        order : []

    }

    const [state , dispatch] = useReducer(reducer , initialState)



    const getOrderdata = async(url) => {
        dispatch({type : 'SET_LOADING'})
        try {
            const res =await axios.get(url)
            const orderdata =await res.data
            dispatch({type : 'SET_ORDER_DATA' , payload : orderdata})
        } catch (error) {
            dispatch({type : 'SET_ERROR' , payload : error})
        }
    }

    const checkedHandler = (i,event) => {
        dispatch({type : 'SET_IS_CHECKED' , payload : i})

        const name = event.target.name

        dispatch({type : 'SET_FILTER'  , payload : {name ,i}})
    }

    useEffect(()=>{
        getOrderdata(API)
    },[])

    



    return <OrderContext.Provider value={{...state , checkedHandler}}>
        {children}
    </OrderContext.Provider>
}




const useOrderContext= () => {
    return useContext(OrderContext)
}

export {OrderContextProvider ,useOrderContext}
