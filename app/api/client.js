import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://192.168.1.111:9001/api/",
});

export default apiClient;
