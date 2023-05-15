import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import Dashboard from './components/Dashboard'
import Transactions from './components/Transactions'
import Schedules from './components/Schedules'
import Users from './components/Users'
import Settings from './components/Settings'
import Help from './components/Help'
import ContactUs from './components/ContactUs'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Dashboard} />
    <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    <ProtectedRoute exact path="/transactions" component={Transactions} />
    <ProtectedRoute exact path="/schedules" component={Schedules} />
    <ProtectedRoute exact path="/users" component={Users} />
    <ProtectedRoute exact path="/settings" component={Settings} />
    <ProtectedRoute exact path="/help" component={Help} />
    <ProtectedRoute exact path="/contact-us" component={ContactUs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
