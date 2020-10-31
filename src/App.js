import React from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter  , Route , Switch} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';


function App() {
  return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route path='/about' component={About}></Route>
              <Route path='/contact' component={Contact}></Route>
              <Route path="/:post_id" component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
        
  );
}

export default App;
