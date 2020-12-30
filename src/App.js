import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailedCourse from "./pages/DetailedCourse";
import Courses from "./pages/Courses";
import Compare from "./pages/Comparison";
import { comp } from "./data/CompData";
import Footer from "./components/Footer";

function App() {
  console.log(comp);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/" component={Courses} />
          <Route exact path="/courses/:slug" component={DetailedCourse} />
          <Route exact path="/compare/:slug" component={Compare} />
        </Switch>
        {/*<Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
