import client from "../client";
import urls from "../urls";

export const post = (form) => client.post(`${urls.coupon}`, form);
export const getAll = (storeId, params) => client.get(`${urls.coupon}/${storeId}?${params}`);
export const get = (storeId, couponId) => client.get(`${urls.coupon}/${storeId}/${couponId}`);
export const put = (couponId, form) => client.put(`${urls.coupon}/${couponId}`, form);
export const remove = (form) => client.delete(`${urls.coupon}`, {
  data: form,
});
