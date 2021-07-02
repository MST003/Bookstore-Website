import * as actions from '../actions/bookActions';
let initialState = {
    message: '',
    books: [
       
    ]
}

// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        
        case actions.CREATE_BOOK:
            if(action.payload.success){
                return {
                    message: 'book successfully added!'
                }
            }
            else{
                return {
                    message: 'book failed to added!'
                }
            }
            case actions.BOOK_DETAILS:
                if(action.payload.success){
                    return {
                        message: 'book deatils saved!'
                    }
                }
                else{
                    return {
                        message: 'book details are not saved!'
                    }
                }
                
        default : return state
    }
 
}

export default reducer;