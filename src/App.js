
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Narvar from "./components/Narvar";
import Rightbar from "./components/Rightbar";
import { Box, Stack,createTheme, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {

  const[mode,setMode] = useState("dark")
  const darkTheme = createTheme({
    palette: {
        mode:mode
    }
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" bgcolor={"background.default"} color={"text.primary"}>
        <Narvar /> 
        <Stack direction ='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />        
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
        </Box>
    </ThemeProvider>
  );
}

export default App;
