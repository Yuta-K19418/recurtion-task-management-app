import Input from "@mui/icons-material/Input";
import Star from "@mui/icons-material/Star";
import Check from "@mui/icons-material/Check";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Box, Card, CardContent, IconButton, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { DeleteTaskCardAction } from "../actions/sections";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

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

  const dispatch = useDispatch();
  const onDeleteTaskCard = () => {
    dispatch(DeleteTaskCardAction(props.taskSectionId, props.taskId));
  };

  return (
    <Draggable draggableId={props.taskId} index={props.index}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Card sx={{ height: 140, p: 0, mb: 1 }}>
            <CardContent>
              <TextField variant="standard" size="small" placeholder="Task Name" />
              <Typography sx={{ mt: 2 }} color="#808080">
                Section Name
                {props.taskSectionName === "" ? "" : `: ${props.taskSectionName}`}
              </Typography>
              <Box sx={{ display: "inline-flex", justifyContent: "flex-end" }}>
                <IconButton
                  color={inputButtonState ? "success" : "default"}
                  style={{
                    backgroundColor: inputButtonState ? "#DDDDDD" : "transparent",
                  }}
                  onClick={onInput}
                >
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
