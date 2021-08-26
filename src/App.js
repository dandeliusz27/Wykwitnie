import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Location from './components/pages/Location';
import Footer from "./components/Footer";
import  WeddingDesigner  from "./components/pages/WeddingDesigner";
import  Celebrations  from "./components/pages/Celebrations";



function App() {
	return (
		<div className="App">
	  		<>
				<Router>
		  			<Navbar />
		  			<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/services' exact component={Services} />
						<Route path='/products' exact component={Products} />
						<Route path='/sign-up' exact component={SignUp} />
						<Route path='/location' exact component={Location} />
						<Route path='/wedding-designer' exact component={WeddingDesigner} />
						<Route path='/celebrations' exact component={Celebrations} />
		  			</Switch>
					<Footer />
				</Router>        
	  		</>
		</div>
  	);
}

export default App;
