import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  mainData: [
    {
      id: 1,
      title: "",
      body: "",
    },
  ],
  page: 1,
  itemsPerPage: 10,
};

export const dataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    pushData: (state, { payload: data }) => {
      return {
        ...state,
        mainData: data,
        data,
        dataPerPage: data.slice(0, state.itemsPerPage),
        TotalPages: Math.ceil(data.length / state.itemsPerPage),
      };
    },
    goToPage: (state, { payload: page }) => {
      const start = (page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return {
        ...state,
        page,
        dataPerPage: state.data.slice(start, end),
      };
    },
    nextPrevPage: (state, { payload }) => {
      const current = state.page + payload;
      const start = (current - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return {
        ...state,
        page: current,
        dataPerPage: state.data.slice(start, end),
      };
    },
    search: (state, { payload: text }) => {
      if (!text.trim()) {
        return {
          ...state,
          page: 1,
          data: state.mainData,
          dataPerPage: state.mainData.slice(0, state.itemsPerPage),
          TotalPages: state.mainData.length / state.itemsPerPage,
        };
      }

      let idArr = [];
      state.mainData.forEach(({ id, title, body }) => {
        if (
          id.toString().includes(text) |
          body.includes(text) |
          title.includes(text)
        ) {
          idArr.push(id);
        }
      });

      const newData = state.data.filter((item) => {
        return idArr.includes(item.id);
      });

      return {
        ...state,
        page: 1,
        data: newData,
        dataPerPage: newData.slice(0, state.itemsPerPage),
        TotalPages: Math.ceil(newData.length / state.itemsPerPage),
      };
    },
    filter: (state, { payload: key }) => {
      let newData;
      const start = (state.page - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;

      const newArr = [...current(state.data)];

      newData = newArr.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        data: newData,
        dataPerPage: newData.slice(start, end),
      };
    },
  },
});
export const { actions, reducer } = dataSlice;
