import axios from "axios";
const api = {
    getAllPitches: () => {
      return axios.get("/api/getAllPitches")
    },
    savePitch:(pitchObj) => {
      return axios.post("/api/saved", pitchObj);
    },
    handleUpVote: (pitchId) => {
      return axios.put(`/api/upVote/${pitchId}`);
    }
  }

  export default api