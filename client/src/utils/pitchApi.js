import axios from "axios";
const API = {
  getAllProjects: () => {
    return axios.get("/api/getAllProjects");
  },
  saveProject: payload => {
    return axios.post("/api/saved", payload);
  },
  handleUpVote: projectId => {
    return axios.put(`/api/upVote/${projectId}`);
  },
  handleDownVote: projectId => {
    return axios.put(`/api/downVote/${projectId}`);
  },
  recordVotedProject: (userId, projectId) => {
    return axios.put(`/api/recordVotedProject/${userId}/${projectId}`);
  }
};

export default API;
