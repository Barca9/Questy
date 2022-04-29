import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./hooks/useRoutes";
import {useAuth} from "./hooks/authHook";
import {AuthContext} from "./context/authContext";
import './index.css'


function App() {

    const {token, login, logout, userId} = useAuth()
   // const isAuthenticated = !!token;
    const isAuthenticated = 10;
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
