import 'whatwg-fetch';
import {getType} from './helper.js';

var rootContext = "";

const __fetch = (_method) => (option) => {

		let ops = Object.assign({},{
		//	mode:'no-cors', 
			credentials: 'same-origin',
		},option, {method: _method});

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
				ops.url = ops.url + "?" + sParam
			}
		}
		
		return new Promise((resolve, reject)=>{
			fetch(ops.url,ops).then(response=>{
				if(response.headers.get('__authentication__') === 'failed'){
					if(window){
						response.json().then(json=>{
							window.location.href = json.map.__message__.trim();
						}).catch(err=>{
							reject(err);
						});
					}else{
						reject('not in browser environment, can not redirect');
					}	
				}else{
					resolve(response);
				}
			});
		});

	};

export const get = __fetch('GET');
export const post = __fetch('POST');
export const getJson = (option)=>{  
	if(option.headers){
		option.headers['Accept'] = 'application/json';
	}else{
		option.headers = {
			'Accept' : 'application/json',
		};
	}
	return get.call(null, option).then(checkStatus).then(parseJson);
};

export const batchGet = (aOps)=>Promise.all(aOps.map(get));
export const batchGetJson = (aOps)=>Promise.all(aOps.map(getJson));
export const postJson = (option, data)=>{

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
		return post.call(null, option).then(checkStatus).then(parseJson);
};

export const batchPostJson = (aOps)=> Promise.all(aOps.map((ops)=> postJson(ops.option, ops.data)));

export const postForm = (option, form)=>{

	var formEle = typeof form ==='string'?document.querySelector(form): form;
	return post.call(null, Object.assign({},option,{body:formEle })).then(checkStatus).then(parseJson);

};

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


const checkStatus = (response)=>{

	if(Math.floor(response.status/100) === 2){
		return response;
	}else{
		var error = new Error(`response status : ${response.status}, Error is ${response.statusText}`);
		error.response = response;
		return Promise.reject(error);
	}
};

const parseJson = (res)=>res.json();

export const getContent = json=>json.map.__content__;

