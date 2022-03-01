import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
