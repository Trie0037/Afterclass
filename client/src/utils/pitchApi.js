import axios from "axios";
const API = {
  getAllProjects: () => {
    return axios.get("/api/getAllProjects");
  },
  savePitch: pitchObj => {
    return axios.post("/api/saved", pitchObj);
  },
  handleUpVote: pitchId => {
    return axios.put(`/api/upVote/${pitchId}`);
  },
  handleDownVote: pitchId => {
    return axios.put(`/api/downVote/${pitchId}`);
  }
};

export default API;
