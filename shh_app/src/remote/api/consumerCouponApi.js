import client from "../client";
import urls from "../urls";

// export const post = (receipt, couponId) => client.post(`${urls.consumerCoupon}/${couponId}`, receipt);
export const post = (consumerCoupon) => client.post(`${urls.consumerCoupon}`, consumerCoupon);
export const getAll = (consumerUserId, state) => client.get(`${urls.consumerCoupon}/${consumerUserId}/${state}`);
export const get = (consumerAccountId, consumerCouponId) => client.get(`${urls.consumerCoupon}/${consumerAccountId}/${consumerCouponId}`);
// put == use
export const put = (consumerCouponId) => client.put(`${urls.consumerCoupon}/${consumerCouponId}`);
// export const remove = (form) => client.delete(`${urls.consumerCoupon}`, {
//   date: form,
// });
