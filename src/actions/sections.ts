import { SectionsType, TaskSection } from "../types/index";
import ACTION_TYPE from "./index";

const shortid = require("shortid");

export const AddSectionAction = (): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.ADD_SECTION,
    payload: {
      sections: [
        {
          taskSectionId: shortid.generate(),
          taskSectionName: "",
          tasks: [
            {
              taskId: shortid.generate(),
              taskName: "",
              taskContent: "",
            },
          ],
        },
      ],
    },
  };
};

export const InputSectionNameAction = (taskSectionId: string, inputName: string): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.INPUT_SECTION_NAME,
    payload: {
      sections: [
        {
          taskSectionId: taskSectionId,
          taskSectionName: inputName,
          tasks: [],
        },
      ],
    },
  };
};

export const AddTaskCardAction = (taskSectionId: string): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.ADD_CARD,
    payload: {
      sections: [
        {
          taskSectionId: taskSectionId,
          taskSectionName: "",
          tasks: [
            {
              taskId: shortid.generate(),
              taskName: "",
              taskContent: "",
            },
          ],
        },
      ],
    },
  };
};

export const DeleteTaskCardAction = (taskSectionId: string, taskId: string): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.DELETE_CARD,
    payload: {
      sections: [
        {
          taskSectionId: taskSectionId,
          taskSectionName: "",
          tasks: [
            {
              taskId: taskId,
              taskName: "",
              taskContent: "",
            },
          ],
        },
      ],
    },
  };
};

export const InputTaskCardNameAction = (
  taskSectionId: string,
  taskId: string,
  inputName: string
): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.INPUT_TASK_CARD_NAME,
    payload: {
      sections: [
        {
          taskSectionId: taskSectionId,
          taskSectionName: "",
          tasks: [
            {
              taskId: taskId,
              taskName: inputName,
              taskContent: "",
            },
          ],
        },
      ],
    },
  };
};

export const InputTaskContentAction = (
  taskSectionId: string,
  taskId: string,
  inputContent: string
): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.INPUT_TASK_CONTENT,
    payload: {
      sections: [
        {
          taskSectionId: taskSectionId,
          taskSectionName: "",
          tasks: [
            {
              taskId: taskId,
              taskName: "",
              taskContent: inputContent,
            },
          ],
        },
      ],
    },
  };
};

export const SortAction = (sections: TaskSection[]): SectionsType["action"] => {
  return {
    type: ACTION_TYPE.DRAG_HAPPENED,
    payload: {
      sections: sections,
    },
  };
};
