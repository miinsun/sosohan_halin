import client from "../client";
import urls from "../urls";

export const get = (consumerCouponId) => client.get(`${urls.consumerCoupon}/${consumerCouponId}`);
export const put = (form) => client.put(`${urls.consumerCoupon}`, form);
