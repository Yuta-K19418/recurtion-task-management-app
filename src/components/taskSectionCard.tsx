import { Button, Card, CardContent, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./taskCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores";
import { TaskSection, Task } from "../types";
import { AddTaskCardAction, InputSectionNameAction } from "../actions/sections";

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

  const dispatch = useDispatch();
  const onInputSectionName = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(InputSectionNameAction(props.taskSectionId, event.target.value));
  };

  const onAddTaskCard = () => {
    dispatch(AddTaskCardAction(props.taskSectionId));
  };

  return (
    <Card sx={{ width: 250, m: 1 }}>
      <CardContent sx={{ pb: 2 }}>
        <Card sx={{ height: 55, p: 0, mb: 1 }}>
          <CardContent>
            <TextField
              variant="standard"
              size="small"
              placeholder="Section Name"
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                onInputSectionName(event)
              }
            />
          </CardContent>
        </Card>
        {tasks.map((task: Task) => (
          <TaskCard
            key={task.taskId}
            taskSectionId={props.taskSectionId}
            taskSectionName={props.taskSectionName}
            taskId={task.taskId}
          />
        ))}
        <Button sx={{ m: 0, p: 0 }} onClick={onAddTaskCard}>
          <AddIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskSectionCard;
