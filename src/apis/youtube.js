import axios from "axios";

const KEY = "AIzaSyAyk46viml-kyJCjSxCmB_QdYzvrrm6ov4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
