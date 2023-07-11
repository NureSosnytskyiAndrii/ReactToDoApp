import './App.css';
import './index.css';
import {TodoWrapper} from "./components/TodoWrapper";
import {TodoWrapperLocalStorage} from "./components/TodoWrapperLocalStorage";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <TodoWrapperLocalStorage />
    </div>
  );
}

export default App;
