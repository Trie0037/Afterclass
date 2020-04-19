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
  getAllInterestedUsers: projectId => {
    return axios.get(`/api/getAllInterestedUsers/${projectId}`);
  },
  getProjectsBelongingToUser: userId => {
    return axios.get(`/api/getProjectsBelongingToUser/${userId}`);
  },
  getBackgroundImage: userId => {
    return axios.get(`/api/getBackgroundImage/${userId}`);
  },
  handleEditMyProject: (projectId, editedProjectPayload) => {
    return axios.put(
      `/api/handleEditMyProject/${projectId}`,
      editedProjectPayload
    );
  },
  handleSaveBackgroundImage: (userId, payload) => {
    return axios.put(`/api/handleSaveBackgroundImage/${userId}`, payload);
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
  },
  assignEmail: (userId, email) => {
    return axios.get(`/api/assignEmail/${userId}/${email}`);
  },
  getUserEmail: userId => {
    return axios.get(`/api/getUserEmail/${userId}`);
  }
};

export default API;
