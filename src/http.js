import vue from 'vue'

let API_ROOT = "/"
export const ApiGet = (url, query) => {
	let _url;
	if(query){
		_url = '${url}?${query}';
	}else{
		_url = '${url}';
	}
	let promise = vue.http.get(url).then((res)=>{
			if(res.data.code === 200){
				return res.data;
			}
		},(res)=>{
			console.log("ajax request error");
	})
	return promise;
}


export const getAPI = (url)=> {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(JSON.parse(req.response));
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

export function ApiPost({url,query}){
	let _url;
	if(query){
		_url = API_ROOT+'${url}?${query}'
	}else{
		_url = API_ROOT+'${url}'
	}
	return vue.http.post(_url)
		.then((res)=>{
			if((res.status>=200 && res.status <300) || res.status ===  304){
				return res.data
			}
			return Promise.reject(new Error(res.status))
		},(res)=>{
			return Promise.reject(new Error(res.status))
		})
}

export function ApiJsonp({url,query,callback}){
	let _url;
	if(query){
		_url = API_ROOT + '${url}?${query}'
	}else{
		_url = API_ROOT + '${url}'
	}
	return vue.http.jsonp(_url)
		.then((res)=>{
			if((res.status>=200 && res.status <300) || res.status ===  304){
				return res.data
			}
			return Promise.reject(new Error(res.status))
		},(res)=>{
			return Promise.reject(new Error(res.status))
		})
}

export function getQueryParam(param){
	let result = {};
	if(!param){
		return;
	}
	let href = window.location.href;
	let urlStr = href.split('?')[1];
	for(let i = 0;i<urlStr.length;i++){
		const a = urlStr[i].split("=")[0];
		const b = urlStr[i].split("=")[1];
		result[a] = b;
	}
	return result;
}