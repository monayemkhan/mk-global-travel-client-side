import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import AddTravels from './Pages/AddTravels/AddTravels';
import Travel from './Pages/Home/Travel/Travel';
import AddBooking from './Pages/AddBooking/AddBooking';
import TravelDetails from './Pages/TravelDetails/TravelDetails';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import MyBooking from './Pages/MyBooking/MyBooking';
import ManageBooking from './Pages/ManageBooking/ManageBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/travel">
              <Travel></Travel>
            </Route>
            <Route path="/addtravels">
              <AddTravels></AddTravels>
            </Route>
            <Route path="/booking/:bookingId">
              <AddBooking></AddBooking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/travels/:travelId">
              <TravelDetails></TravelDetails>
            </PrivateRoute>
            <PrivateRoute path="/mybooking/:myBookingId">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path="/managebooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
