import client from "../client";
import urls from "../urls";

export const getReceiptByParams = (params) => client.get(`${urls.receipt}?${params}`);

