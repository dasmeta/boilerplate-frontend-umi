import axios from "axios";

interface ResponseData {}

const API_BASE_URL = `${BACKEND_HOST_EXAMPLE}/api`;

const exampleService = {
  getExampleData: async () => {
    const endpointUrl = `${API_BASE_URL}/collection-name`;
    const config = {
      headers: {},
      params: {},
    };
    try {
      const response = await axios.get(endpointUrl, config);
      return response.data;
    } catch (error) {
      console.error("Error fetching collection-name:", error);
      throw error;
    }
  },
};

export default exampleService;
