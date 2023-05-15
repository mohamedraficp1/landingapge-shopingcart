import API from "../utils";
import urls from "../urls";

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const signIn = async (payload) => API.post(urls.SIGN_IN, payload);
