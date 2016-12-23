import {fromJS} from 'immutable';
import {generateGetThunk} from '../../common/commonAction';

/**
 * declair constants used as action type.
 * this type should be state name/ action name
*/

const ADD_TO_CART = 'CartState/ADD_TO_CART',
      UPDATE_CART = 'CartState/UPDATE_CART';

/**
 *  redux actions 
*/
const addToCart = (data)=>{
    return {
        type: ADD_TO_CART,
        cartInfo: data
    };
}

/**
 * export the acitons
*/
export const actions = {
    addToCart,

};

/**
 *  construct initial state. this should be immutable object
*/
const initialState = fromJS({});

/**
 * redux reducers
*/
export default function CartReducer(state = initialState, action){

    switch (action.type){
        case ADD_TO_CART:
            return state;
        case UPDATE_CART:
            return state;
        default:
        return state;
    }

}