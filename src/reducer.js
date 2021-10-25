export const initialState = {
  Objects: [],
  SearchType: null,
  TextBoxValue: null,
};

// Selector


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_OBJECTS":
      return {
        ...state,
        Objects: [...state.Objects, action.item],
      };



    case "SET_SEARCH_TYPE":
      return {
        ...state,
        SearchType: action.SearchType,
      };

    case "SET_TEXTBOX_VALUE":
      return {
        ...state,
        TextBoxValue: action.TextBoxValue,
      };




    default:
      return state;
  }
};

export default reducer;
