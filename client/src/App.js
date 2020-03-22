import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import store from './store'
import { Provider } from 'react-redux'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode'
import { setCurrentUser } from './actions/authAction'
import PrivateRoute from './common/PrivateRoute'
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(
    setCurrentUser(decoded)
  );
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          {/* <Landing /> */}
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-experience" component={AddExperience} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-education" component={AddEducation} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
