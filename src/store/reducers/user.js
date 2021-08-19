import client from "../../remote/client";
import urls from "../../remote/urls";

export const get = (businessUserId) => client.get(`${urls.user}/${businessUserId}`);
export const put = (businessUserId, form) => client.put(`${urls.user}/${businessUserId}`, form);
export const remove = (businessUserId) => client.delete(`${urls.user}/${businessUserId}`);
export const login = (form) => client.post("/api/v1/login", form);
export const logout = () => client.get("/api/v1/logout");
export const signup = (form) => client.post("/api/v1/signup", form);
export const findingId = (form) => client.post("/api/v1/findingId", form);
export const findingPw = (form) => client.post("/api/v1/findingPw", form);
