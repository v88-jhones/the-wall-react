import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WallProvider } from "./context/wall/wall_context";
import { ModalProvider } from "./context/modal/modal_context";
import Auth from "./views/user/auth/auth";
import Wall from "./views/user/wall/wall";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Auth />}></Route>
                <Route 
                    exact 
                    path="/wall" 
                    element={
                        <ModalProvider>
                            <WallProvider>
                                <Wall />
                            </WallProvider>
                        </ModalProvider>
                    }
                >
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
