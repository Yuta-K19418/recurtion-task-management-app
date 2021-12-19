import Input from "@mui/icons-material/Input";
import Star from "@mui/icons-material/Star";
import Check from "@mui/icons-material/Check";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Box, Card, CardContent, IconButton, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTaskCardAction, InputTaskCardNameAction, InputTaskContentAction } from "../actions/sections";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { RootState } from "../stores";
import { Task, TaskSection } from "../types";

interface Props {
  taskSectionId: string;
  taskSectionName: string;
  taskId: string;
  index: number;
}

const TaskCard = (props: Props) => {
  const [inputButtonState, setInputButtonState] = useState(false);
  const [checkButtonState, setCheckButtonState] = useState(false);
  const [starButtonState, setStarButtonState] = useState(false);

  const onInput = () => {
    setInputButtonState(!inputButtonState);
  };
  const onCheck = () => {
    setCheckButtonState(!checkButtonState);
  };
  const onStar = () => {
    setStarButtonState(!starButtonState);
  };

  let tasks: Task[] = [];
  useSelector((state: RootState) => state.sections["sections"]).map((section: TaskSection) => {
    if (section.taskSectionId === props.taskSectionId) {
      section.tasks.map((task: Task) => {
        if (task.taskId === props.taskId) {
          tasks.push(task);
        }
        return task;
      });
    }
    return section;
  });

  const dispatch = useDispatch();
  const onDeleteTaskCard = () => {
    dispatch(DeleteTaskCardAction(props.taskSectionId, props.taskId));
  };

  const onInputTaskCardName = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(InputTaskCardNameAction(props.taskSectionId, props.taskId, event.target.value));
  };

  const onInputTaskContent = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    dispatch(InputTaskContentAction(props.taskSectionId, props.taskId, event.target.value));
    setInputButtonState(false);
  };

  return (
    <Draggable
      key={`draggable-task-card-${props.taskId}`}
      draggableId={`draggable-task-card-${props.taskId}`}
      index={props.index}
    >
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Card sx={{ p: 0, mb: 1 }}>
            <CardContent>
              <TextField
                variant="standard"
                size="small"
                placeholder="Task Name"
                value={tasks[0].taskName}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onInputTaskCardName(event)}
              />
              <Typography sx={{ mt: 2 }} color="#808080">
                Section Name
                {props.taskSectionName === "" ? "" : `: ${props.taskSectionName}`}
              </Typography>
              {!inputButtonState ? (
                <Typography sx={{ mt: 2 }} color="#808080">
                  {tasks[0].taskContent}
                </Typography>
              ) : undefined}
              {inputButtonState ? (
                <TextField
                  variant="outlined"
                  defaultValue={tasks[0].taskContent}
                  onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => onInputTaskContent(event)}
                />
              ) : undefined}
              <Box sx={{ display: "inline-flex", justifyContent: "flex-end" }}>
                <IconButton color={inputButtonState ? "success" : "default"} onClick={onInput}>
                  <Input />
                </IconButton>
                <IconButton
                  color={checkButtonState ? "success" : "default"}
                  style={{
                    backgroundColor: checkButtonState ? "#DDDDDD" : "transparent",
                  }}
                  onClick={onCheck}
                >
                  <Check />
                </IconButton>
                <IconButton
                  color={starButtonState ? "success" : "default"}
                  style={{
                    backgroundColor: starButtonState ? "#DDDDDD" : "transparent",
                  }}
                  onClick={onStar}
                >
                  <Star />
                </IconButton>
                <IconButton onClick={onDeleteTaskCard}>
                  <DeleteTwoToneIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
