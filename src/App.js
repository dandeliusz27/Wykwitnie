import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  ScrollToTop  from "./components/ScrollToTop";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from "./components/Footer";
import  WeddingDesigner  from "./components/pages/WeddingDesigner";
import  Celebrations  from "./components/pages/Celebrations";
import SimpleMap from './components/pages/Location';
import Product1 from './components/pages/Products/Product1';
import Product2 from './components/pages/Products/Product2';



function App() {
	return (
		<div className="App">
	  		<>
				<Router>
					<ScrollToTop />
		  			<Navbar />
		  			<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/services' exact component={Services} />
						<Route path='/products' exact component={Products} />
						<Route path='/sign-up' exact component={SignUp} />
						<Route path='/location' exact component={SimpleMap} />
						<Route path='/wedding-designer' exact component={WeddingDesigner} />
						<Route path='/celebrations' exact component={Celebrations} />
						<Route path='/product1' exact component={Product1} />
						<Route path='/product2' exact component={Product2} />
		  			</Switch>
					<Footer />
				</Router>        
	  		</>
		</div>
  	);
}

export default App;
