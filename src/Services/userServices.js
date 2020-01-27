import axios from "axios";
import JWTDecode from "jwt-decode";
import Api from "./httpService"


export async function userRegister(data) {
  console.log(data);
  let response = await Api.post(
    "api/user/register",
    data
  );
  return response;
}

export async function userLogin(data) {
  console.log(data);
  let response = await Api.post("api/auth/login", data);
  console.log(response);
  sessionStorage.setItem("key", response.data.token);
  Api.defaults.headers.common["jwt-token"] = response.data.token;
  return response;
}

export async function getDetails() {
  let response = await Api.get("api/auth/getDetails");
  console.log(response)
  return response;
}

export async function getjwt() {
  let token = sessionStorage.getItem("key");
  return token;
}
export async function logout() {
  sessionStorage.removeItem("key");
  axios.defaults.headers.common["jwt-token"] = "";
}

export async function getCurrentUser() {
  try {
    let token =await axios.get.headers["jwt-token"]
    return JWTDecode(token);
  } catch (ex) {
    return null;
  }
}

export default {
  userRegister,
  userLogin,
  getjwt,
  getDetails,
  logout,
  getCurrentUser
};
