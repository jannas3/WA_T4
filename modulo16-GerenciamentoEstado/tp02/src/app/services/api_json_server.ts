//src/app/services/api.ts
import axios from "axios";

const api_json = axios.create({
  baseURL: "https://jelly-adjoining-guppy.glitch.me",
});

export default api_json;
