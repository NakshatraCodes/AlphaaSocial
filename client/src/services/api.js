export function getURL(path = "") {
  return `http://localhost:8443/api/v1${path}`;
}


export async function fetchAPI(path, req) {
  let header = await requestHeader(
    "GET",
    req && req.headers && req.headers.Authorization
      ? req.headers.Authorization
      : null
  );
  const requestUrl = await getURL(path);
  const response = await fetch(requestUrl, header);
  
  return response;
}

export async function requestHeader(method, token) {
  let header = {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:8443"
    },
  };
  if (token) {
    header.headers["Authorization"] = token;
  }

  return header;
}

// export async function postAPI(path, postData, token = null) {
//   const requestUrl = getStrapiURL(path);
//   let header = await requestHeader("POST", token);
//   header.body = JSON.stringify(postData);
//   const response = await fetch(requestUrl, header);
//   const data = await response.json();
//   return data;
// }
