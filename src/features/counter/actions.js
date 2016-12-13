import {INCREMENT,RESET,RANDOM_REQUEST,
    RANDOM_RESPONSE} from './constants';
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

 function getRandom(number) {
  return {
    type: RANDOM_RESPONSE,
    payload: number
  };
}
export const random = ()=>(dispatch)=>{
    return generateRandomNumber().then((number)=>{
            console.log(number);
        return dispatch(getRandom(number));
    })
};