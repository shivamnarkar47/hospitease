// @/app/components/apiService.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000/";

const apiService = axios.create({
  baseURL,
});

export default apiService;
