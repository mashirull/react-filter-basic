


const OrderReducer = (state ,action) => {
    if(action.type === 'SET_LOADING'){
        return {
            ...state ,
            isLoading : true
        }
    }

    if(action.type === 'SET_ORDER_DATA'){
        return {
            ...state , 
            isLoading : false ,
            allOrder : [...action.payload],
            order : [...action.payload],
        }
    }

    if(action.type === 'SET_IS_CHECKED'){

        let Checked = [...state.isChecked]
        let index = action.payload
        Checked[index] = !Checked[index]
        return {
            ...state ,
            isChecked : Checked
        }
    }

    if(action.type === 'SET_FILTER'){

        let Checked = state.isChecked
        let totalData = [...state.order]

        // if(Checked[i] === false){
        //     totalData = totalData.filter((curElem) => curElem.orderStatus !== name) 
        // }
        // else if(Checked[i]){
        //     let New = totalData.filter((curElem) => curElem.orderStatus === name)
        //     totalData.concat(New)
        //     // totalData =  [...state.order] 
        // }
        
        if(Checked[0] === false){
            totalData = totalData.filter((curElem) => curElem.orderStatus !== 'New') 
        }
        else if(Checked[0]){
            let New = totalData.filter((curElem) => curElem.orderStatus === 'New')
            totalData.concat(New)
            // totalData =  [...state.order] 
        }
        
        if(Checked[1]=== false){
            totalData = totalData.filter((curElem) => curElem.orderStatus !== 'Packed') 
            
        }
        else if(Checked[1]){
           let packed = totalData.filter((curElem) => curElem.orderStatus === 'Packed')
            totalData.concat(packed)
        }
        

        if(!Checked[2]){
            totalData = totalData.filter((curElem) => curElem.orderStatus !== 'InTransit') 
        }
        else if(Checked[2]){
            let InTransit = totalData.filter((curElem) => curElem.orderStatus === 'InTransit')
            totalData.concat(InTransit)
        }

        if(!Checked[3]){
            totalData = totalData.filter((curElem) => curElem.orderStatus !== 'Delivered') 
        }
        else if(Checked[3]){
            let Delivered = totalData.filter((curElem) => curElem.orderStatus === 'Delivered')
            totalData.concat(Delivered)
        }



 

        return{
            ...state,
            allOrder : totalData
        }
    }
  return (
    state
  )
}

export default OrderReducer