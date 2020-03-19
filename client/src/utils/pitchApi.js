import axios from "axios";
const API = {
  getAllProjects: () => {
    return axios.get("/api/getAllProjects");
  },
  submitProject: payload => {
    return axios.post("/api/submitProject", payload);
  },
  submitInterestedUser: (projectId, interestedUserPayload) => {
    return axios.put(
      `/api/submitInterestedUser/${projectId}`,
      interestedUserPayload
    );
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
    return axios.get(
      `/api/checkIfUserVotedForThisProject/${userId}/${projectId}`
    );
  },
  getProjectsBelongingToUser: userId => {
    return axios.get(`/api/getProjectsBelongingToUser/${userId}`);
  },
  handleEditMyProject: (projectId, editedProjectPayload) => {
    return axios.put(
      `/api/handleEditMyProject/${projectId}`,
      editedProjectPayload
    );
  },
  handleDeleteMyProject: userProjectId => {
    return axios.delete(`/api/handleDeleteMyProject/${userProjectId}`);
  },
  getThreeHighestVotedProjects: () => {
    return axios.get("/api/getThreeHighestVotedProjects");
  },
  checkUserPermission: (userId, roleToCheck) => {
    return axios.get(`/api/checkUserPermission/${userId}/${roleToCheck}`);
  },
  assignRole: (userId, role) => {
    return axios.get(`/api/assignRole/${userId}/${role}`);
  }
};

export default API;
