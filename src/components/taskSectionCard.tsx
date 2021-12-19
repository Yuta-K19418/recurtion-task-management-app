import { Button, Card, CardContent, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./taskCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores";
import { TaskSection, Task } from "../types";
import { AddTaskCardAction, InputSectionNameAction } from "../actions/sections";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface Props {
  taskSectionId: string;
  taskSectionName: string;
  index: number;
}

const TaskSectionCard = (props: Props) => {
  let tasks: Task[] = [];
  useSelector((state: RootState) => state.sections["sections"])
    .filter((section: TaskSection) => section.taskSectionId === props.taskSectionId)
    .map((section: TaskSection) => section.tasks.map((task: Task) => tasks.push(task)));

  const dispatch = useDispatch();
  const onInputSectionName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(InputSectionNameAction(props.taskSectionId, event.target.value));
  };

  const onAddTaskCard = () => {
    dispatch(AddTaskCardAction(props.taskSectionId));
  };

  return (
    <Draggable
      key={`draggable-task-section-${props.taskSectionId}`}
      draggableId={`draggable-task-section-${props.taskSectionId}`}
      index={props.index}
    >
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable
            key={`droppable-task-card-${props.taskSectionId}`}
            droppableId={`droppable-${props.taskSectionId}`}
            type="taskCards"
          >
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Card sx={{ width: 250, m: 1 }}>
                  <CardContent sx={{ pb: 2 }}>
                    <Card sx={{ height: 55, p: 0, mb: 1 }}>
                      <CardContent>
                        <TextField
                          variant="standard"
                          size="small"
                          placeholder="Section Name"
                          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onInputSectionName(event)}
                        />
                      </CardContent>
                    </Card>
                    {tasks.map((task: Task, index: number) => (
                      <TaskCard
                        key={task.taskId}
                        taskSectionId={props.taskSectionId}
                        taskSectionName={props.taskSectionName}
                        taskId={task.taskId}
                        index={index}
                      />
                    ))}
                    <Button sx={{ m: 0, p: 0 }} onClick={onAddTaskCard}>
                      <AddIcon />
                    </Button>
                  </CardContent>
                </Card>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default TaskSectionCard;
