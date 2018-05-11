/* eslint-disable no-undef */
 import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import './style.css';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      address: '',
      opened: false
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    const city = address.substr(0, address.indexOf(','));
    console.log(city);
    this.props.onCityChange('city', city);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      opened: newProps.active
    })
  }
  renderDropdown(suggestions, getSuggestionItemProps) {
    if (suggestions.length) {
      return (
        <div className="autocomplete-dropdown-container">
          {suggestions.map(suggestion => {
            const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div {...getSuggestionItemProps(suggestion, { className, style })}>
                <span>{suggestion.description}</span>
              </div>
            )
          })}
        </div>
      )
    }
    else return false;
  }

  render() {
     const searchOptions = {
      types: ['(cities)']
    }
    if (this.props.location) {
      searchOptions.location = new google.maps.LatLng(this.props.location.lat, this.props.location.lng);
      searchOptions.radius = 20000;
      searchOptions.strictbounds = true;
    }
    let classes = 'location-search-input-wrap '; 
    classes += this.state.opened ? 'opened' : '';
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className={classes}>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            {this.renderDropdown(suggestions, getSuggestionItemProps)}
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;