import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './project/Home';
import Shop from './project/Shop';
import Favourites from './project/Favourites';
import Orders from './project/Orders';
import Contact from './project/Contact';
import Main from './project/Main';
import Profile from './project/Profile';
import Add from './project/Add';


function App() {
  return (
  <>
  <div className="App">
    <BrowserRouter>
    <Main/>
    <Routes>
      <Route path="/home" element={<Home/> } />
      <Route path="/shop" element={<Shop/> } />
      <Route path="/favourites" element={<Favourites/> } />
      <Route path="/order" element={<Orders/> } />
      <Route path="/contact" element={<Contact/> } />
      <Route path='/profile' element={ <Profile/> }  />
      <Route path='/add' element={ <Add /> } />
    </Routes>
    
    </BrowserRouter>

  </div>
  
  </>
  );
}

export default App;
