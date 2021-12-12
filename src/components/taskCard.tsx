import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  taskSectionId: string;
  taskSectionName: string;
  taskCardId: string;
}

const TaskCard = (props: Props) => {
  return (
    <Card sx={{ height: 140, p: 0, mb: 1 }}>
      <CardContent>
        <TextField variant="standard" size="small" placeholder="Task Name" />
        <Typography sx={{ mx: 1, mt: 2 }} color="#808080">
          Section Name
          {props.taskSectionName === "" ? "" : `: ${props.taskSectionName}`}
        </Typography>
        <Box sx={{ display: "inline-flex", justifyContent: "flex-end" }}>
          <Button sx={{ m: 0, p: 0 }}>
            <DeleteTwoToneIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
