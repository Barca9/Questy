import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ConstructorPage from "./components/ConstuctorPage/constructorPage";
import {useRoutes} from "./hooks/useRoutes";
import {useAuth} from "./hooks/authHook";
import {AuthContext} from "./context/authContext";
import './index.css'


function App() {

    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token;
    //в useAuth сейчас стоит токен 100  !!изменить на null
    const routes = useRoutes(isAuthenticated)

  return (
      <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
          <Router>
              <div className='main-wrapper'>
                  {routes}
              </div>
          </Router>
      </AuthContext.Provider>

  );
}

export default App;
