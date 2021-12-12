import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
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
  const sections = useSelector((state: RootState) => state.sections["sections"]);
  const onDragEnd = (result: DropResult) => {
    const draggedSection = sections.splice(result.source.index, 1);
    sections.splice(result.destination!.index, 0, ...draggedSection);
  };

  return (
    <div style={style}>
      {sections.map((section: TaskSection, index: number) => (
        <DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result)}>
          <Droppable droppableId={section.taskSectionId} direction="horizontal" type="sections">
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
        </DragDropContext>
      ))}
      <AddSectionButton />
    </div>
  );
};

export default Main;
