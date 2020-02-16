import axios from "axios";
const api = {
  getAllProjects: () => {
    return axios.get("/api/getAllProjects")
  },
  savePitch: (pitchObj) => {
    return axios.post("/api/saved", pitchObj);
  },
  handleUpVote: (pitchId) => {
    return axios.put(`/api/upVote/${pitchId}`);
  }
}

export default api