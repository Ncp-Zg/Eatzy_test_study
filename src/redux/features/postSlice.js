import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "",
    title: "",
    category: "",
    description: "",
    img: "",
    postedAt: "",
    author: "",
    incrementor: 0,
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    all_post: (state, action) => {
      state = action.payload;
      return state;
    },
    update_post: (state, action) => {
      let currentPost = action.payload.post.filter(
        (data) => data.id === action.payload.id
      );
      let index = action.payload.post.findIndex((data) => {
        return data.id === action.payload.id;
      });
      currentPost[0] = { ...currentPost[0], incrementor: currentPost[0].incrementor+1 };
      let newPostData = [...action.payload.post]
      newPostData[index]=currentPost[0]
      state = newPostData;
      return state;
    },
  },
});

export default postSlice.reducer;
export const { all_post, update_post } = postSlice.actions;
