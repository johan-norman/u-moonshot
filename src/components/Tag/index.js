import React, { Component } from 'react'
import styled from 'styled-components';

const TagItem = styled.button`
    background: transparent;
    padding: .5em 1em;
    margin: 0 .5em .5em 0;
    border: 1px solid #979797;
    font-size: 14px;
`;

class Tag extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {

    };
  }

  handleClick(item) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    this.setState({
      color_white: !this.state.color_white
    })

    console.log(this.state.interests)
 }

  componentWillUpdate(){
    // localStorage.setItem('storeInterest', this.state.isToggleOn);
  }

  render() {
    let bgColor = this.state.color_white ? "white" : "black"
    let fontColor = this.state.color_white ? "black" : "white"

    return(
      <TagItem>
        {this.state.interests.map(item =>
          <TagItem
            onClick={this.handleClick.bind(this)}
            style={{backgroundColor: bgColor, color: fontColor}}
            key={item.id}
          >
            {item.title}
          </TagItem>
        )}
      </TagItem>
    )
  }
}

export default Tag;
