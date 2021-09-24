import client from "../client";
import urls from "../urls";

export const post = (form) => client.post(urls.link, form);
export const getMyIncoming = (storeId) => client.get(`${urls.link}/incoming/${storeId}`);
export const getMyOutcoming = (storeId) => client.get(`${urls.link}/outcoming/${storeId}`);
export const get = (proposerId, receiverId) => client.get(`${urls.link}/${proposerId}/${receiverId}`);
export const put = (form) => client.put(`${urls.store}/state`, {
  data: form,
});
export const remove = (linkId) => client.delete(`${urls.store}/${linkId}`);
