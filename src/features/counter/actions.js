import {INCREMENT,RESET,RANDOM_REQUEST,
    RANDOM_RESPONSE} from './constants';
import {generateGetThunk} from '../../common/commonAction';
export async function generateRandomNumber() {
  // simulate an asynchronous operation
  return new Promise((res) => setTimeout(res, 1000))
    .then(() => Math.floor(Math.random() * 100));
}

export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}

 function getRandom(obj) {
  return {
    type: RANDOM_RESPONSE,
    payload: obj.number
  };
}

export const random = generateGetThunk(getRandom, '/test/api');

// export const random = ()=> async (dispatch)=>{

//   try {
//         let json = await getJson({url:'/test/api'});
//         if(json.status === 'success'){
//            return dispatch(getRandom(getContent(json)));
//         }
//   } catch (error) {
//       console.error(`test error ${error}`);
//   }
// };


