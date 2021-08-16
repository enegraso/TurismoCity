import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Landing/Landing";
import Navbar from "./components/NavBar/Navbar";
import FlightCard from "./components/FlightCard/FlightCard";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Politics from "./components/Politics/Politics";
import Actities from "./components/Activities/Activities";
import Suppliers from "./components/Suppliers/Suppliers";
import ActivityDetail from "./components/ActivityDetail/ActivityDetail";
import { ContainerUserAct } from "./components/Suppliers/containerUserAct/ContainerUserAct";
import FormActivities from "./components/FormActivities/FormActivities";
import Checkout from "./components/Checkout/Checkout";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51JOlrrFTiOvO1nWfhoO6y7uUxBwyiNwSAiHzKnrM5rkCquiTpFYK9wamrKPMw8CfF5M0BBju63peRYQjBXNwiqJE00Aah2leya")


function App() {

  return (
    <div className="App">
      <Route path="/" component={Banner} />
      <Route path="/" component={Navbar}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/flights" component={Search}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/politics" component={Politics} ></Route>
      <Route path="/activities" component={Actities}></Route>
      <Route path="/suppliers" component={Suppliers} />
      <Route path="/activity/:id" component={ActivityDetail}></Route>
      <Route path="/suppliers/posts" component={ContainerUserAct} />
      <Route path="/suppliers/load" component={FormActivities} />
      <Elements stripe={stripePromise}>
        <Route path="/checkout" component={Checkout}></Route></Elements>
    </div>

  );
}

export default App;
