import axios from "axios";
const TOKEN = "280f93ef4b2b4a58916945e8e71d6963";
type Method = "GET" | "POST";
export const fetch = async (method: Method, url: string) => {
  const res = await axios({
    method,
    url: "https://api.spoonacular.com/recipes/" + url,
  });
  return res;
};
