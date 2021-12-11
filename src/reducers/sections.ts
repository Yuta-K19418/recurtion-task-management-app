import { initialSectionState } from "../stores/initialState";
import { SectionsType } from "../types/index";

const SectionsReducer = (
  state = initialSectionState,
  action: SectionsType["action"]
) => {
  switch (action.type) {
    case "ADD_SECTION":
      return {
        ...state,
        sections: [...state.sections, action.payload.taskSection],
      };
    default:
      return state;
  }
};

export default SectionsReducer;
