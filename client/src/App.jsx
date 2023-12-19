import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Location } from "./pages/Location/Location";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location/:id" element={<Location />} />
                
            </Routes>
        </div>
    );
}

export default App;
