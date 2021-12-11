import ACTION_TYPE from "../actions/index";

export type SectionsType = {
  state: sectionsStateType;
  action: SectionsActionType;
};

type sectionsStateType = {
  sections: TaskSection[];
};

export type TaskSection = {
  taskSectionId: string;
  taskSectionName: string;
  tasks: taskCard[];
};

type taskCard = {
  taskCardId: string;
  taskCardName: string;
};

type SectionsActionType = {
  type: keyof typeof ACTION_TYPE;
  payload: {
    taskSection: TaskSection;
  };
};
