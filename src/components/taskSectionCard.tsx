import { Button, Card, CardContent, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  id: string;
}

const TaskSectionCard = (props: Props) => {
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
        <Button sx={{ m: 0, p: 0 }}>
          <AddIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskSectionCard;
