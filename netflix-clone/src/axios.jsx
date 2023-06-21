import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});
// instance.get("/foo-bar"); first it take the instance and add the remaing

export default instance;

