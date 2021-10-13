import client from "../client";
import urls from "../urls";

export const post = (form) => client.post(urls.store, form);
export const getMy = (businessUserId) => client.get(`${urls.store}/${businessUserId}`);
export const get = (storeId) => client.get(`${urls.store}/${storeId}`);
export const getStoresByParams = (params) => client.get(`${urls.store}?${params}`);
export const put = (storeId, form) => client.put(`${urls.store}/${storeId}`, form);
export const remove = (form) => client.delete(`${urls.store}`, {
  data: form,
});
