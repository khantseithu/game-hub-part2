import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "829bfa1aa41a49588a3038898a5ffd14",
  },
});
