import "./App.css";
import InputData from "./components/InputData";
import User from "./components/User";
import { useSelector } from "react-redux";

function App() {
  const userList = useSelector((state) => state.users.userList);
  return (
    <div className="App">
      <InputData></InputData>
      {userList.length !== 0 && <User></User>}
    </div>
  );
}

export default App;
