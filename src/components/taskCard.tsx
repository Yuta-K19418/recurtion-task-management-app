import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { DeleteTaskCardAction } from "../actions/sections";

interface Props {
  taskSectionId: string;
  taskSectionName: string;
  taskId: string;
}

const TaskCard = (props: Props) => {
  const dispatch = useDispatch();
  const onDeleteTaskCard = () => {
    dispatch(DeleteTaskCardAction(props.taskSectionId, props.taskId));
  };

  return (
    <Card sx={{ height: 140, p: 0, mb: 1 }}>
      <CardContent>
        <TextField variant="standard" size="small" placeholder="Task Name" />
        <Typography sx={{ mx: 1, mt: 2 }} color="#808080">
          Section Name
          {props.taskSectionName === "" ? "" : `: ${props.taskSectionName}`}
        </Typography>
        <Box sx={{ display: "inline-flex", justifyContent: "flex-end" }}>
          <Button sx={{ m: 0, p: 0 }} onClick={onDeleteTaskCard}>
            <DeleteTwoToneIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
