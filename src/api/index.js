import { signIn } from "./services/auth";
import { getDealerDetails, addLead } from "./services/user";

const API_SERVICE = {
  signIn,
  getDealerDetails,
  addLead,
};

export { API_SERVICE };
