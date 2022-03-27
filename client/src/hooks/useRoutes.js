import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ConstructorPage from "../components/ConstuctorPage/constructorPage";
import AuthPage from "../components/AuthPage/authPage";
import QuestsShowPage from "../components/QuestsShowPage";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";

export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {

        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/constructor' component={ConstructorPage} exact/>
                    <Route path='/quests' component={QuestsShowPage}/>
                </Switch>
                <Footer/>
            </Router>
        )
    }
    return (
        <Router>
            <Switch>
                <Route path='/' component={AuthPage} exact/>
                {/*<Redirect to='/'/>*/}
            </Switch>
        </Router>
    )
}

