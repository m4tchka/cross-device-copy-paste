import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
    const [count, setCount] = useState(0);
    // const xyz = process.env.XYZ
    // console.log(xyz)
    return (
        <div className="App">
            {/* <h1>Vite + React</h1> */}
            <Dashboard />
        </div>
    );
}

export default App;
