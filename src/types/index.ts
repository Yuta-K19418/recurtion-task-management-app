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
  tasks: Task[];
};

export type Task = {
  taskId: string;
  taskName: string;
};

type SectionsActionType = {
  type: keyof typeof ACTION_TYPE;
  payload: {
    sections: TaskSection[];
  };
};
