import { SectionsType } from "../types/index";
import ACTION_TYPE from "./index";

const shortid = require("shortid");

const AddSectionAction = (): SectionsType["action"] => {
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

export default AddSectionAction;
