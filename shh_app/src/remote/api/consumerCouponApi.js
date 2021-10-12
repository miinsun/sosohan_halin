import client from "../client";
import urls from "../urls";

export const post = (receipt, couponId) => client.post(`${urls.consumerCoupon}/${couponId}`, receipt);
export const getAll = (consumerUserId, params) => client.get(`${urls.consumerCoupon}/${consumerUserId}?${params}`);
export const get = (consumerAccountId, consumerCouponId) => client.get(`${urls.consumerCoupon}/${consumerAccountId}/${consumerCouponId}`);
// put == use
export const put = (consumerCouponId) => client.put(`${urls.consumerCoupon}/${consumerCouponId}`);
// export const remove = (form) => client.delete(`${urls.consumerCoupon}`, {
//   date: form,
// });
