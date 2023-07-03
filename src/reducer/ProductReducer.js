

const ProductReducer = (state ,action) => {
    if(action.type === 'SET_ISPRODUCT'){
        return {
            ...state ,
            is_product : true
        }
    }

    if(action.type === 'SET_PRODUCT'){
        return { 
            ...state ,
            product : action.payload,
            allProduct : [...action.payload],
            is_product : false
        }
    }

    if(action.type === 'SET_IS_CHECKED1'){
        let Checked = [...state.isChecked1];
        let index = action.payload
        Checked[index] = !Checked[index]
        return {
            ...state , 
            isChecked1 : Checked
        }
    }

    if(action.type === 'SET_FILTER'){

        let Checked = [...state.isChecked1];
        let totalProduct = [...state.allProduct]

        if(Checked[0] === false){
            let date = new Date()
            let year = date.getFullYear();

            let expireDate = totalProduct.filter((curElem)=> {
                let expiryDate = curElem.expiryDate
                let exDate = new Date(expiryDate)

                let exyear = exDate.getFullYear()

                return  exyear > year

            })

            totalProduct = expireDate

        }

        if(Checked[1] === false){
            let lowStock = totalProduct.filter((curElem) => {
                return curElem.stock > 200
            })

            totalProduct = lowStock
        }
        return {
            ...state ,
            product : totalProduct
        }
    }



  return (
    state
  )
}

export default ProductReducer;