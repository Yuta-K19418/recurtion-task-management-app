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
  return (
    <div style={style}>
      {sections.map((section: TaskSection) => (
        <TaskSectionCard
          key={section.taskSectionId}
          taskSectionId={section.taskSectionId}
          taskSectionName={section.taskSectionName}
        />
      ))}
      <AddSectionButton />
    </div>
  );
};

export default Main;
