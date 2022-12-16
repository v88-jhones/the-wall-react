import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./views/user/auth/auth";
import Wall from "./views/user/wall/wall";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Auth />}></Route>
                <Route exact path="/wall" element={<Wall />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
