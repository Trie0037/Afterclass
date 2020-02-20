import axios from "axios";

const getUser = () => {
 return axios.get("/user");
};

export default getUser
