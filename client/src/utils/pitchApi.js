import axios from "axios";
const API = {
  getAllProjects: () => {
    return axios.get("/api/getAllProjects");
  },
  savePitch: pitchObj => {
    return axios.post("/api/saved", pitchObj);
  },
  handleUpVote: projectId => {
    return axios.put(`/api/upVote/${projectId}`);
  },
  handleDownVote: projectId => {
    return axios.put(`/api/downVote/${projectId}`);
  }
};

export default API;
