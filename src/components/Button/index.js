import styled from 'styled-components';
import React from 'react'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background: #484848;
  border-radius: 100px;
  border: 0;
  padding: 10px 25px;
  cursor: pointer;

  &:hover {
      background: #000;
  }

`;

class Button extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return(
      <Link to={this.props.to}>
        <StyledButton>{this.props.text}</StyledButton>
      </Link>
    )
  }
}

export default Button;
