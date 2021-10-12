import client from "../client";
import urls from "../urls";

export const post = (consumerAccountId, couponId) => {
    console.log(`${urls.consumerCoupon}/${consumerAccountId}/${couponId}`);
    client.post(`${urls.consumerCoupon}/${consumerAccountId}/${couponId}`);
};

// export const post = (consumerAccountId, couponId) => {
//     client.post(`${urls.consumerCoupon}/${consumerAccountId}/${couponId}`)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };


export const getAll = (consumerAccountId, params) => client.get(`${urls.consumerCoupon}/${consumerAccountId}?${params}`);
export const get = (consumerAccountId, consumerCouponId) => client.get(`${urls.consumerCoupon}/${consumerAccountId}/${consumerCouponId}`);
// put == use
export const put = (consumerCouponId) => client.put(`${urls.consumerCoupon}/${consumerCouponId}`);
// export const remove = (form) => client.delete(`${urls.consumerCoupon}`, {
//   date: form,
// });
