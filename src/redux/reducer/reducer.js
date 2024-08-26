
let initialState= {
    contactList:[],
    inputWord : "",
};

function reducer(state=initialState, action){
    const {type,payload} = action
    switch(type){
        case "ADD_CONTACT":
            return {
                ...state,
                contactList:[
                    ...state.contactList,{
                        name:payload.name ,phoneNumber: payload.phoneNumber
                    }]
            }
        case "SEARCH_NAME" :
            return {
                ...state, 
                inputWord: payload.inputWord
            }

        default: {
            return {
                ...state
            }
        }    
    }

}

export default reducer;