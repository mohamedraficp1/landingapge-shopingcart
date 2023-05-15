import API from "../utils";
import urls from "../urls";
import { getCurrentUser } from "../../helpers/utils";

/**
 *
 * @param {string} dealerId - Request params
 * @returns Promise
 */
export const getDealerDetails = async (id) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.get(`${urls.GET_DEALERSHIP_DETAILS_BY_DEALER}/${user}/${id}`);
};

/**
 *
 * @param {object} payload - The body of the request
 * @returns Promise
 */
export const addLead = async (payload) => {
  const user = getCurrentUser()
    ? `${getCurrentUser().secretKey}/${getCurrentUser().id}`
    : null;
  return API.post(`${urls.POST_ENQUIRY_DETAILS}/${user}`, payload);
};
