import axios from "axios";

const baseUrl = "https://evening-caverns-34846.herokuapp.com";

export default {
  async sendNewUser(obj) {
    try {
      const data = await axios.post(`${baseUrl}/test`, obj);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
