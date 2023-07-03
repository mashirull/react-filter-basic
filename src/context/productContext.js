import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from '../reducer/ProductReducer';
import axios from "axios";

const ProductContaxt = createContext();

const api = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products';


const ProductProvider = ({children}) => {

    const initialState = {
        product : [],
        is_product : false,
        isChecked1 : [true ,true],
        allProduct : []
    }

    const [state , dispatch] = useReducer( reducer ,initialState )

    const getProductData = async(url) => {
        dispatch({type : 'SET_ISPRODUCT'})
        try {
            const res =await axios.get(url);
            const data = await res.data;
            dispatch({type : 'SET_PRODUCT' , payload : data})
        } catch (error) {
            dispatch({type : 'SET_ERROR' , payload : error})
        }
    }

    const checkHandler1 = (index) => {
        dispatch({type : 'SET_IS_CHECKED1' , payload : index})

        dispatch({type : 'SET_FILTER'})
    }

    useEffect(()=>{
        getProductData(api)
    },[]);

    return <ProductContaxt.Provider value={{...state ,checkHandler1}}>
        {children}
    </ProductContaxt.Provider>
}

const useProductContaxt = () => {
   return useContext(ProductContaxt)
}


export {ProductProvider , useProductContaxt}