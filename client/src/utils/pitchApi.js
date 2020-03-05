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
  },
  checkIfUserVotedForThisProject: (userId, projectId) => {
    return axios.get(`/api/checkIfUserVotedForThisProject/${userId}/${projectId}`);
  },
  getProjectsBelongingToUser: userId => {
    return axios.get(`/api/getProjectsBelongingToUser/${userId}`);
  },
  handleDeleteMyProject: userProjectId => {
    return axios.delete(`/api/handleDeleteMyProject/${userProjectId}`);
  },
  getThreeHighestVotedProjects: () => {
    return axios.get("/api/getThreeHighestVotedProjects");
  },
  checkUserPermission: userId => {
    return axios.get(`/api/checkUserPermission/${userId}`);
  },
  assignDefaultUserRole: (userId, role) => {
    return axios.get(`/api/assignDefaultUserRole/${userId}/${role}`);
  }
};

export default API;
