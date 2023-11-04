import Box from "../../components/Box";
import Task from "./Task";

const DisplayTask = () => {
  const tasks = ["First", "Second", "Third", "Fouth", "Fifth"];
  return (
    <Box>
      {tasks.map((e) => (
        <Task taskContent={e}></Task>
      ))}
    </Box>
  );
};

export default DisplayTask;
