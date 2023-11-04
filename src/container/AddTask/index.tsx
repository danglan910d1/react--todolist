import Box from "../../components/Box";
import Button from "../../components/Button";
import Input from "../../components/Input";

const AddTask = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box sx={{ width: "70%" }}>
        <Input placeholder="Enter a Todo..."></Input>
      </Box>
      <Box>
        <Button>Add</Button>
      </Box>
    </Box>
  );
};

export default AddTask;
