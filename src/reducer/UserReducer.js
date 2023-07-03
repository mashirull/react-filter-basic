
const UserReducer = (state , action) => {
    if(action.type === 'SET_LOADDER'){
        return {
            ...state ,
            isUserdata : true,

        }
    }


    if(action.type === 'SET_USERDATA'){
        return {
            ...state ,
            isUserdata : false,
            users : action.payload,
            totalUsers : [...action.payload]
        }
    }

    if(action.type === 'SET_SEARCH_FILTER'){

        let text = action.payload;
        let allUsersData = [...state.totalUsers]
        let updatedValue ;

        updatedValue = allUsersData.filter((curElem) => {
            return curElem.fullName.toLowerCase().includes(text)
        })

        return {
            ...state ,
            users : updatedValue

        }
    }


  return (
    state
  )
}

export default UserReducer