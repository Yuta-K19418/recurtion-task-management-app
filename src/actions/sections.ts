import { SectionsType } from "../types/index";
import ACTION_TYPE from "./index";

const shortid = require("shortid");

export const AddSectionAction = (): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.ADD_SECTION,
    payload: {
      taskSection: {
        taskSectionId: shortid.generate(),
        taskSectionName: "",
        tasks: [
          {
            taskId: shortid.generate(),
            taskName: "",
          },
        ],
      },
    },
  };
};

export const InputSectionNameAction = (
  taskSectionId: string,
  inputName: string
): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.INPUT_SECTION_NAME,
    payload: {
      taskSection: {
        taskSectionId: taskSectionId,
        taskSectionName: inputName,
        tasks: [],
      },
    },
  };
};

export const AddTaskCardAction = (
  taskSectionId: string
): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.ADD_CARD,
    payload: {
      taskSection: {
        taskSectionId: taskSectionId,
        taskSectionName: "",
        tasks: [
          {
            taskId: shortid.generate(),
            taskName: "",
          },
        ],
      },
    },
  };
};

export const DeleteTaskCardAction = (
  taskSectionId: string,
  taskId: string
): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.DELETE_CARD,
    payload: {
      taskSection: {
        taskSectionId: taskSectionId,
        taskSectionName: "",
        tasks: [
          {
            taskId: taskId,
            taskName: "",
          },
        ],
      },
    },
  };
};
