import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Navbar from './components/Navbar'
import { Route, Switch} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
