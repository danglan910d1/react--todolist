
import "./App.css";
import DisplayTask from "./container/DisplayTask";
import Title from "./components/Title";
import AddTask from "./container/AddTask";
import NotiTask from "./container/NotiTask";
import Box from "./components/Box";
import dataTodo from "./dataTodo";

function App() {
  const countTasks = () => {
    let countNum = 0;
    dataTodo.forEach((e) => {
      e.isRemove ? countNum : countNum++;
    });
    return countNum;
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "hsl(240, 10%, 30%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        color: "rgba(160, 150, 150, 255)",
        padding: "2rem",
        borderRadius: "20px",
      }}
    >
      <Title variant="h3">Todo-List</Title>
      <AddTask></AddTask>
      <DisplayTask></DisplayTask>
      <NotiTask count={countTasks()}></NotiTask>
    </Box>
  );
}

export default App;