import { FETCH_BUTTON_CLICK, SELECT_POST } from "./Types";
export const fetchPosts = () => {
  return {
    type: FETCH_BUTTON_CLICK,
    payload: [
      {
        userId: 1,
        id: 1,
        title: "Title 01",
        dis: "Discription 01 dawfawfxlwafk",
      },
      {
        userId: 2,
        id: 2,
        title: "Title 02",
        dis: "Discription 02 awfafdryhhf",
      },
      {
        userId: 3,
        id: 3,
        title: "Title 03",
        dis: "Discription 03 effsegsgsegsd efsegse seg4e s esegesgs",
      },
      {
        userId: 4,
        id: 4,
        title: "Title 04",
        dis: "Discription 04 efsegseg  thyth swefe 5h hhhhhhr",
      },
      {
        userId: 5,
        id: 5,
        title: "Title 05",
        dis: "Discription 05 wsfse rgrg ijoorjg",
      },
    ],
  };
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
