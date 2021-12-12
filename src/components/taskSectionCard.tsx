import { Button, Card, CardContent, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./taskCard";
import { useSelector } from "react-redux";
import { RootState } from "../stores";
import { TaskSection, Task } from "../types";

interface Props {
  taskSectionId: string;
  taskSectionName: string;
}

const TaskSectionCard = (props: Props) => {
  let tasks: Task[] = [];
  useSelector((state: RootState) => state.sections["sections"])
    .filter(
      (section: TaskSection) => section.taskSectionId === props.taskSectionId
    )
    .map((section: TaskSection) =>
      section.tasks.map((task: Task) => tasks.push(task))
    );
  return (
    <Card sx={{ width: 250, m: 1 }}>
      <CardContent sx={{ pb: 2 }}>
        <Card sx={{ height: 55, p: 0, mb: 1 }}>
          <CardContent>
            <TextField
              variant="standard"
              size="small"
              placeholder="Section Name"
            />
          </CardContent>
        </Card>
          {tasks.map((task: Task) => (
            <TaskCard
              key={task.taskId}
              taskSectionId={props.taskSectionId}
              taskSectionName={props.taskSectionName}
              taskCardId={task.taskId}
            />
          ))}
        <Button sx={{ m: 0, p: 0 }}>
          <AddIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskSectionCard;
