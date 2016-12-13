
export const getType = obj=>Object.prototype.toString.call(obj).replace(/.*\s(.*)]$/, "$1");
export const formatDate = ms=>{
	let date = new Date(Number(ms));
	return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()}`;
};

export const formatDateTime = ms=>{
	let date = new Date(Number(ms));
	return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const formatTime = ms=>{
	let date = new Date(Number(ms));
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const isNumberLike = (target)=>Number.parseFloat(target) - target + 1 > 0;

