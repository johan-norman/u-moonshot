import React, { Component } from 'react'
import styled from 'styled-components';

const TagsContainer = styled.section`
  margin-top: 20px;
  position: relative;
  z-index: 5;
`;

const TagItem = styled.button`
    background: transparent;
    border: 2px solid #000000;
    border-radius: 3px;
    padding: .5em 1em;
    margin: 0 .5em .5em 0;
    border: 2px solid #000000;
    font-size: .85em;
`;

class Tags extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: false,
      color_white: true,
      interests: [
        {id: 0, title: "Intresse 01"},
        {id: 1, title: "Intresse 02"},
        {id: 2, title: "Intresse 03"},
        {id: 3, title: "Intresse 04"},
        {id: 4, title: "Intresse 05"},
        {id: 5, title: "Intresse 06"},
        {id: 6, title: "Intresse 07"},
        {id: 7, title: "Intresse 08"},
        {id: 8, title: "Intresse 09"},
        {id: 9, title: "Intresse 10"},
        {id: 10, title: "Intresse 11"},
        {id: 11, title: "Intresse 12"},
        {id: 12, title: "Intresse 13"},
        {id: 13, title: "Intresse 14"},
        {id: 14, title: "Intresse 15"},
        {id: 15, title: "Intresse 16"}
      ]
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
      <TagsContainer>
        {/*
        <button onClick={this.handleClick.bind(this)} style={{backgroundColor: bgColor, color: fontColor}}>
          {this.state.isToggleOn ? 'Lägg till detta intresse' : 'Ta bort detta intresse'}
        </button>
        */}

        {this.state.interests.map(item =>
          <TagItem
            onClick={this.handleClick.bind(this)}
            style={{backgroundColor: bgColor, color: fontColor}}
            key={item.id}
          >
            {item.title}
          </TagItem>
        )}
      </TagsContainer>
    )
  }
}

export default Tags;
