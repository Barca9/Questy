import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {useAuth} from "./hooks/authHook";
import {AuthContext} from "./context/authContext";
import './index.css'
import {getToken} from "./helpers/helperFunctions";


function App() {

    const {token, login, logout} = useAuth()
    const isAuthenticated = !!token;
    /*const isAuthenticated = !!getToken()*/
    const routes = useRoutes(isAuthenticated)


  return (
      <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
          <Router>
              <div className='main-wrapper'>
                  {routes}
              </div>
          </Router>
      </AuthContext.Provider>

  );
}

export default App;
