import "./Location.css"
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 53.672893,
			lng:  15.115430
		},
	zoom: 18
};

	render() {
    	return (
	  	// Important! Always set the container height explicitly
	  	<div className="main-container">
		  	<div className="description-container">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt sequi debitis a magni eaque, ut voluptatibus temporibus cumque dolores!</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident iste nobis facilis sapiente magnam nisi sed molestiae eveniet vero illum!</p>
			</div>
			<div style={{height: '100vh',width: '100%', padding: '20px', backgroundColor: '#fff'}} >
				<GoogleMapReact bootstrapURLKeys={{ key:""}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
						<AnyReactComponent lat={53.672893} lng={15.115430} text="Tu jesteśmy!"/>
				</GoogleMapReact>
			</div>
		</div>
    );
  }
}

export default SimpleMap;