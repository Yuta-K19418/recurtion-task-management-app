import { initialSectionState } from "../stores/initialState";
import { SectionsType, TaskSection } from "../types/index";

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
    case "INPUT_SECTION_NAME":
      state.sections
        .filter(
          (section: TaskSection) =>
            section.taskSectionId === action.payload.taskSection.taskSectionId
        )
        .map(
          (section: TaskSection) =>
            (section.taskSectionName =
              action.payload.taskSection.taskSectionName)
        );
      return {
        ...state,
        sections: [...state.sections],
      };
    case "ADD_CARD":
      state.sections
        .filter(
          (section: TaskSection) =>
            section.taskSectionId === action.payload.taskSection.taskSectionId
        )
        .map((section: TaskSection) =>
          section.tasks.push(action.payload.taskSection.tasks[0])
        );
      return {
        ...state,
        sections: [...state.sections],
      };
    default:
      return state;
  }
};

export default SectionsReducer;
