import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import SortSectonTasksAndTasks from "../operations/sections";
import { RootState } from "../stores";
import { TaskSection } from "../types";
import AddSectionButton from "./addSectionButton";
import TaskSectionCard from "./taskSectionCard";

const style = {
  padding: 20,
  display: "flex",
  alignItems: "flex-start",
};

const Main = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state: RootState) => state.sections["sections"]);
  const onDragEnd = (result: DropResult) => {
      console.log(result);
    dispatch(
      SortSectonTasksAndTasks(
        result.source.droppableId,
        result.destination!.droppableId,
        result.source.index,
        result.destination!.index,
        result.draggableId,
        result.type
      )
    );
  };

  return (
    <DragDropContext key={"main"} onDragEnd={(result: DropResult) => onDragEnd(result)}>
      <div style={style}>
        {sections.map((section: TaskSection, index: number) => (
          <Droppable
            key={`droppable-task-section-${section.taskSectionId}`}
            droppableId={`droppable-task-section-${section.taskSectionId}`}
            direction="horizontal"
            type="sections"
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <TaskSectionCard
                  key={section.taskSectionId}
                  taskSectionId={section.taskSectionId}
                  taskSectionName={section.taskSectionName}
                  index={index}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        <AddSectionButton />
      </div>
    </DragDropContext>
  );
};

export default Main;
