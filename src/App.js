import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Views/Homepage";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import Registration from "./Views/Registration";
import ForStreamers from "./Views/ForStreamers";
import Bonuses from "./Views/Bonuses";
import Login from "./Views/Login";
import HowItWorks from "./Views/HowItWorks";
import ViewStream from "./Views/ViewStream";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage></Homepage>
                    </Route>

                </Switch>
                \
            </Router>
        </div>
    );
}

export default App;
