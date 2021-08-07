import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Food from "./pages/Food/Food";
import Transport from "./pages/Transport/Transport";
import Main from "./pages/main/Main";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/food" component={Food} />
          <Route path="/transport"  component={Transport} />
          <Route path="/details" component={Details} />
          <Route component={NotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
