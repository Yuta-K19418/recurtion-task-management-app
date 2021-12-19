import { Dispatch } from "react";
import { SortAction } from "../actions/sections";
import { RootState } from "../stores";
import { SectionsType, Task, TaskSection } from "../types";

const SortSectonTasksAndTasks = (
  droppableIdStart: string,
  droppableIdEnd: string,
  droppableIndexStart: number,
  droppableIndexEnd: number,
  draggableId: string,
  type: string
) => {
  return (dispatch: Dispatch<SectionsType["action"]>, getState: () => RootState) => {
    const sections = getState().sections["sections"];

    // in the same list
    if (droppableIdStart === droppableIdEnd) {
      const taskSectionId = droppableIdStart.replace("droppable-", "");
      let tasks: Task[] = [];
      sections.filter((section: TaskSection) => section.taskSectionId === taskSectionId)
        .map((section: TaskSection) => tasks.push(...section.tasks));
      const draggedTaskCard = tasks.splice(droppableIndexStart, 1);
      tasks.splice(droppableIndexEnd, 0, ...draggedTaskCard);
      const newSections = sections.map((section: TaskSection) => {
        if (section.taskSectionId === taskSectionId) {
            section.tasks = tasks;
        }
        return section;
      })
      return dispatch(SortAction(newSections));
    }
    // other list
    else {
      // taskCard
      if (draggableId.indexOf("draggable-task-card") === 0) {
        const taskSectionStartId = droppableIdStart.replace("droppable-", "");
        const taskSectionEndId = droppableIdEnd.replace("droppable-", "");
        let sourceTasks: Task[] = [];
        sections
          .filter((section: TaskSection) => section.taskSectionId === taskSectionStartId)
          .map((section: TaskSection) => sourceTasks.push(...section.tasks));
        const draggedTaskCard = sourceTasks.splice(droppableIndexStart, 1);
        let destinationTasks: Task[] = [];
        sections
          .filter((section: TaskSection) => section.taskSectionId === taskSectionEndId)
          .map((section: TaskSection) => destinationTasks.push(...section.tasks));
        destinationTasks.splice(droppableIndexEnd, 0, ...draggedTaskCard);
        const newSections = sections.map((section: TaskSection) => {
          if (section.taskSectionId === taskSectionStartId) {
            section.tasks = sourceTasks;
          } else if (section.taskSectionId === taskSectionEndId) {
            section.tasks = destinationTasks;
          }
          return section;
        });
        return dispatch(SortAction(newSections));
      } else if (draggableId.indexOf("draggable-task-section") === 0) {
        const draggedSection = sections.splice(droppableIndexStart, 1);
        sections.splice(droppableIndexEnd, 0, ...draggedSection);
        return dispatch(SortAction(sections));
      }
    }
    dispatch(SortAction(sections));
  };
};

export default SortSectonTasksAndTasks;
