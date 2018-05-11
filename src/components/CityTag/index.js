import React, {Component} from 'react';
import {GoogleAPIKey, IPStackAPIKey} from '../../lib/api_keys';
import LocationSearchInput from '../LocationSearchInput';

import './style.css';

export class CityTag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city:  this.props.active ? this.props.active : '',
			showSearchLocation: false,
			latitude: '',
			longitude: '',
		}
		this.handleCityChange = this.handleCityChange.bind(this);
		this.openDropdown = this.openDropdown.bind(this);
	}
	componentDidMount() {
		if (!this.props.active) this.getLocationBasedOnIP();
	}
	componentDidUpdate(oldProps, newProps) {
		console.log('s');
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			city: newProps.active
		})
	}
	errorPosition(error) {
		console.log(error);
	}
	showGooglePosition(position) {
		let city = this.props.active ? this.props.active : '';
		fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key='+GoogleAPIKey)
		.then(results => {
			return results.json();
		}).then(data => {
			for (var i=0; i<data.results[0].address_components.length; i++) {
	            for (var b=0;b<data.results[0].address_components[i].types.length;b++) {
	            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
	                if (data.results[0].address_components[i].types[b] == "administrative_area_level_1") {
	                    city = 'test';
	                    break;
	                }
	            }
        	}
			console.log(city);
		});
	}
	getPlaces(input) {
		fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+input+'&types=(cities)&location=60.834778,16.357306&radius=1000000&strictbounds&language=se&withcredentials=false&key='+GoogleAPIKey)
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
		});
	}
	getLocationBasedOnIP() {
		fetch('https://api.ipify.org?format=json')
		.then(results => {
			return results.json();
			}).then(data => {
				const IP = data.ip;
				fetch('http://api.ipstack.com/'+IP+'?access_key='+IPStackAPIKey+'&format=1')
				.then(results => {
					return results.json();
					}).then(data => {
						this.handleCityChange('city', data.city);
						this.setState({
							city: data.city,
							latitude: data.latitude,
							longitude: data.longitude,
							showSearchLocation: true
						})
					});
			});
	}
	handleCityChange(key, payload) {
		console.log(key, payload);
		this.props.onCityChange(key, payload);
		this.setState({showSearchLocation: false})
	}
	renderSearchLocation() {
			const location = {lat: this.state.latitude, lng: this.state.longitude}
			const classes = this.state.showSearchLocation ? 'active' : '';
			return (
			<LocationSearchInput 
				active={this.state.showSearchLocation}
				location={location}
				onCityChange={this.handleCityChange}
			/>
			);

		
	}

	openDropdown() {
		console.log('openDropdown');
		this.setState({
			showSearchLocation: true
		})
	}
	render() {
		return (
			<div className="city-tag-wrap"><div className="city-tag"><strong>Statd:</strong> {this.state.city} <button onClick={this.openDropdown}>ändra</button> { this.renderSearchLocation() }</div></div>
		);
	}
}

export default CityTag;
