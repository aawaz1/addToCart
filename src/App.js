import Home from "./Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router , Route,Routes } from "react-router-dom";
import CheckOut from "./CheckOut";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
      </Router>
   
    </Provider>)
    
  
    
}

export default App;
