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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto molestias officia aut placeat alias dicta, temporibus, sapiente voluptatibus a qui vitae ipsa voluptatum aliquam vel consequuntur quo, molestiae cumque similique earum fuga id recusandae ipsum! Nam vero officiis commodi animi dolorum nulla. Tenetur perspiciatis et ad quos! Ducimus unde at dignissimos eos, in qui deleniti vero. Accusantium quibusdam est quos. Enim numquam, quis qui dicta possimus nostrum ratione ipsa officia similique sunt nam voluptates impedit dolor aspernatur dolores corrupti?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto molestias officia aut placeat alias dicta, temporibus, sapiente voluptatibus a qui vitae ipsa voluptatum aliquam vel consequuntur quo, molestiae cumque similique earum fuga id recusandae ipsum! Nam vero officiis commodi animi dolorum nulla. Tenetur perspiciatis et ad quos! Ducimus unde at dignissimos eos, in qui deleniti vero. Accusantium quibusdam est quos. Enim numquam, quis qui dicta possimus nostrum ratione ipsa officia similique sunt nam voluptates impedit dolor aspernatur dolores corrupti?</p>
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