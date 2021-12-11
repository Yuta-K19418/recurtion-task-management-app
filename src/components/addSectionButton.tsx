import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import AddSectionAction from "../actions/sections";

const AddSectionButton = () => {
  const dispatch = useDispatch();
  const onAddSection = () => {
    dispatch(AddSectionAction());
  };
  return (
    <Button
      color="inherit"
      variant="contained"
      sx={{ mt: 2, mx: 1 }}
      onClick={onAddSection}
    >
      ADD SECTION
    </Button>
  );
};

export default AddSectionButton;
