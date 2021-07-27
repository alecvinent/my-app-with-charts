import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HighchartGraph from "./components/highcharts/graphs";
import {base_routes} from "./shared/routes";
import Navbar from "./components/Navbar";
import Home from "./pages/home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <Navbar/>
                </header>
                <main style={{padding: 5}}>

                    <Switch>
                        <Route exact path={base_routes.home} component={Home}/>
                        <Route exact path={base_routes.highcharts} component={HighchartGraph}/>
                        <Redirect from="*" to={base_routes.home}/>
                    </Switch>

                </main>
                <footer>
                    Nice footer here
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
