import Navbar from "./component/Navbar";
import { BrowserRouter  as Router , Route , Routes} from "react-router-dom";
import Oreder from "./component/Oreder";
import Product from "./component/Product";
import Users from "./component/Users";

function App() {
  return <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Oreder/>}/>
        <Route path="/product" element = {<Product/>}/>
        <Route path="/users" element = {<Users/>}/> 
      </Routes>

    </Router>
  </>
 
      
    
  
}

export default App;
