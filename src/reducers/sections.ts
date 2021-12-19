import { initialSectionState } from "../stores/initialState";
import { SectionsType, Task, TaskSection } from "../types/index";

const SectionsReducer = (state = initialSectionState, action: SectionsType["action"]): SectionsType["state"] => {
  switch (action.type) {
    case "ADD_SECTION":
      return {
        ...state,
        sections: [...state.sections, action.payload.taskSection],
      };

    case "INPUT_SECTION_NAME":
      state.sections
        .filter((section: TaskSection) => section.taskSectionId === action.payload.taskSection.taskSectionId)
        .map((section: TaskSection) => (section.taskSectionName = action.payload.taskSection.taskSectionName));
      return {
        ...state,
        sections: [...state.sections],
      };

    case "ADD_CARD":
      state.sections
        .filter((section: TaskSection) => section.taskSectionId === action.payload.taskSection.taskSectionId)
        .map((section: TaskSection) => section.tasks.push(action.payload.taskSection.tasks[0]));
      return {
        ...state,
        sections: [...state.sections],
      };

    case "DELETE_CARD":
      state.sections.map((section: TaskSection) => {
        if (section.taskSectionId === action.payload.taskSection.taskSectionId) {
          const filteredTasks = section.tasks.filter(
            (task: Task) => task.taskId !== action.payload.taskSection.tasks[0].taskId
          );
          section.tasks = filteredTasks;
        }
        return section;
      });

      return {
        ...state,
        sections: [...state.sections],
      };

    case "INPUT_TASK_CARD_NAME":
      state.sections.map((section: TaskSection) => {
        if (section.taskSectionId === action.payload.taskSection.taskSectionId) {
          const newTasks: Task[] = section.tasks.map((task: Task) => {
            if (task.taskId === action.payload.taskSection.tasks[0].taskId) {
              task.taskName = action.payload.taskSection.tasks[0].taskName;
            }
            return task;
          });
          section.tasks = newTasks;
        }
        return section;
      });

      return {
        ...state,
        sections: [...state.sections],
      };

    default:
      return state;
  }
};

export default SectionsReducer;
