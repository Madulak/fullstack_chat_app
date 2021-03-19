

import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import Signup from './Routes/Auth/Signup/Signup';
import Login from './Routes/Auth/Login/Login';
import Startup from './Routes/StartupScreen/StartupScreen';
import Feed from './Routes/Feed/Feed';


function App() {

  const isAuth = useSelector(state => state.auth.isAuth);

  return (
      <Switch>
          <Route path='/' exact component={Startup} />
          
            <>
                <Route path='/feed' exact component={Feed} />
              <Route path='/login' exact component={Login} />
              <Route path='/signup' component={Signup} />
            </> 
            <>
            </>
          
      </Switch>
  );
}

export default App;
