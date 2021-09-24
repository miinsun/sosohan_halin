import client from "../client";
import urls from "../urls";

export const list = (param) => client.get(`${urls.user}?${param}`);
export const get = (businessUserId) => client.get(`${urls.user}/${businessUserId}`);
export const put = (form) => client.put(`${urls.user}`, form);
export const remove = (businessUserId, password) => client.delete(`${urls.user}/${businessUserId}/${password}`);
export const login = (businessUserId, password) => client.post(`/api/v1/businessLogin/${businessUserId}/${password}`);
export const logout = () => client.get("/api/v1/businessLogout");
export const signup = (form) => client.post("/api/v1/businessSignup", form);
export const findingId = (name, email) => client.post(`/api/v1/findingBusinessUserId/${name}/${email}`);
// eslint-disable-next-line max-len
export const findingPw = (businessUserId, email) => client.post(`/api/v1/findingBusinessUserPw/${businessUserId}/${email}`);
