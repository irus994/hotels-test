import './App.css';
import {Switch, HashRouter} from 'react-router-dom';
import {AppRoute} from "./components/const.js";
import General from "./components/general/general.jsx";
import PageAuthorization from "./components/page-authorization/page-authorization.jsx";
import PrivateRoute from './components/private-route/private-route.js';
import OnlyUnauthorizedRoute from './components/only-unauthorized-route/only-unauthorized-route.js';

function App() {
 return (
     <HashRouter>
       <Switch>
        <PrivateRoute exact path={AppRoute.ROOT} render={() => <General/>}/>
        <OnlyUnauthorizedRoute exact path={AppRoute.SING_IN} render={() => <PageAuthorization/>}/>
       </Switch>
     </HashRouter>
  );
}

export default App;
