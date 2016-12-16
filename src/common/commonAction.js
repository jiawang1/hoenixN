import 'whatwg-fetch';
import {getType} from './helper.js';
import {getAuthenticationToken} from '../utils/authentication';
import {getConfiguration,APP_CONTEXT_ROOT,APP_TIMEOUT} from '../utils/configuration';

const TIMEOUT = getConfiguration(APP_TIMEOUT);
const rootContext = getConfiguration(APP_CONTEXT_ROOT);

/*
 *  generate absolute URL for backend service
 */ 
const correntURL = (ops)=>{

	if(rootContext){
			if(ops.url.charAt(0)==='.'){
				ops.url = ops.url.slice(1);
			}else if(ops.url.charAt(0)!=='/'){
				ops.url = '/' + ops.url;
			}
			ops.url = rootContext + ops.url;
	   }

	if(ops.param){
			var sParam = Object.keys(ops.param).reduce((pre,current)=>{
				 if( getType( ops.param[current]) ==='String' ||getType( ops.param[current]) === 'Number'){
					 return  pre + (pre.length > 0?"&":'') + current + '=' + encodeURIComponent(ops.param[current]);
					}else if(getType(ops.param[current]) === 'Array'){
						return pre + (pre.length > 0?"&":'') + current + '=' +	encodeURIComponent(ops.param[current].join(','));
					} else if(getType(ops.param[current]) === 'Undefined' || getType(ops.param[current]) === 'Null' ){
						return pre ;
					} else if(getType(ops.param[current]) === 'Date'){
						return pre + (pre.length > 0?"&":'') + current + '=' +	ops.param[current].getTime();
					}else{
						throw new Error(`param type ${getType(ops.param[current]) } for query is not supported`);
					}
			}, '');
			
			if(sParam&&sParam.length > 0){
				ops.url = ops.url + "?" + sParam;
			}
		}
};

/**
 * Rejects a promise after `ms` number of milliseconds, if it is still pending
 */
const timeout = (promise, ms) =>{
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(reject);
  });
};


const correntOption = async (option)=>{

	let token = await getAuthenticationToken();
	return {
			credentials: 'same-origin',
			...option,
			headers:{
				...option.headers,
				'Authorization-token':token
			},
			method: _method
		};

};
const __fetch =  (_method) => async (option) => {

		let ops = await correntOption(option);
		correntURL(ops);
		let response = await fetch(ops.url,ops);
		if (response.status >= 400) {
			var error = new Error(`response status : ${response.status}, Error is ${response.statusText}`);
			error.response = response;
			throw error;
		}
		if(response.headers.get('__authentication__') === 'failed'){
			//TODO handle auth failed
		}
		return response;

	};
/*
 *	 handle http GET request
 */
export const get = __fetch('GET');
/*
 *	 handle http POST request
 */
export const post = __fetch('POST');
/*
*	handle http GET request in JSON format
*/
export const getJson = async (option)=>{  
	if(option.headers){
		option.headers['Accept'] = 'application/json';
	}else{
		option.headers = {
			'Accept' : 'application/json',
		};
	}
	let response = await get(option);
	return response.json();
};

export const batchGet = (aOps)=>Promise.all(aOps.map(get));
export const batchGetJson = (aOps)=>Promise.all(aOps.map(getJson));
export const postJson = async (option, data)=>{
		if(option.headers){
			option.headers['Accept'] = 'application/json';
			option.headers['Content-Type'] = 'application/json';
		}else{
			option.headers = {
				'Content-Type':'application/json',
				'Accept' : 'application/json',
			};
		}
		option.body = typeof data ==='string'?data:JSON.stringify(data);
		let response = await post(option);
		return response.json();
};

export const batchPostJson = (aOps)=> Promise.all(aOps.map((ops)=> postJson(ops.option, ops.data)));

const __generateThunk = (method)=>(actionCreator, url) => (option) =>(dispatch)=>{

	return method.call(null,url, option).then(json=>{
	
		if(json.status === 'success'){
			var __content = getType(json.map.__content__) === 'String'?JSON.parse(json.map.__content__):json.map.__content__;
			dispatch(actionCreator(__content));
			return __content;
		}else{
			dispatch(showError(json.map.__message__));
			return null;
		}
	}).catch(err=>{
		console.error(err.stack || err);
		dispatch(showError(`未知的异常，请联系技术人员`));
		return Promise.reject(err);
	});
};

export const generatePostThunk = __generateThunk((url, option)=>{
	return postJson({url: url}, option);
});

export const generateGetThunk = __generateThunk((url, option)=>{
	return getJson({param: option,url:url });
});

export const getContent = json=>json.map.__content__;

