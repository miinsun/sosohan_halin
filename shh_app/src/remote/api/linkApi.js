import client from "../client";
import urls from "../urls";

export const post = (form) => client.post("/api/v1/link", form);
export const getMyIncoming = (storeId) => client.get(`${urls.link}/incoming/${storeId}`);
export const getMyOutcoming = (storeId) => client.get(`${urls.link}/outcoming/${storeId}`);
export const get = (store) => client.get(`${urls.link}?store=${store}`);
export const getAlarm = (store) => client.get(`${urls.link}/alarm?storeid=${store}`);
export const put = (linkid, state, management) => client.put(`${urls.link}?
linkid=${linkid}&state=${state}&management=${management}`);
export const putAlarm = (storeId) => client.put(`${urls.link}/alarm/watched?storeid=${storeId}`);
export const putAlarmReturn = (storeId) => client.put(`${urls.link}/alarm/return?storeid=${storeId}`);
export const remove = (linkId) => client.delete(`${urls.link}/${linkId}`);
