import urls from "./Urls";
import { getData, postData } from "./Utils";

const userLogin = async (body) => {
  try {
    const res = await getData(`${urls.userLoginUrl}`, body);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

const userSignup = async (body) => {
  try {
    const res = await postData(`${urls.userSignup}`, body);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { userLogin, userSignup };
