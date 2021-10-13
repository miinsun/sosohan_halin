import client from "../client";
import urls from "../urls";

export const get = (params) => client.get(`${urls.receipt}?${params}`);
