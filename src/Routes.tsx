import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
    </BrowserRouter>
)

export default Routes;