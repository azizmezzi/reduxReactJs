import { FETCH_POSTS, NEW_POSTS } from "./type";

export const fetchPost = () => (dispatch) => {
  console.log("fetchinh");
  const data = [{ name: "Alex" }, { name: "Sandro" }];
  dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};

export const createPost = (postData) => (dispatch) => {
  dispatch({
    type: NEW_POSTS,
    payload: { name: postData },
    //  payload2: allData.push(postData),
  });
};
