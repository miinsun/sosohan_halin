import client from "../client";
import urls from "../urls";

export const getAll = (storeId, params) => client.get(`${urls.consumerCoupon}/${storeId}?${params}`);
export const get = (storeId, couponId) => client.get(`${urls.consumerCoupon}/${storeId}/${couponId}`);
export const put = (consumerAccountId, form) => client.put(`${urls.consumerCoupon}/${consumerAccountId}`, form);
// export const remove = (form) => client.delete(`${urls.consumerCoupon}`, {
//   date: form,
// });
