import axios from "axios";

const instace = axios.create({
  baseURL: "https://react-router-9ddba.firebaseio.com/",
});

export default instace;
