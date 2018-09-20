import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';

const ModalDiv = styled.div`
    position: fixed;
    text-align: center;
    z-index: 100;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    box-shadow: 5px 5px 15px rgba(0,0,0,.75);
    transition: opacity 0.4s ease-out, transform 0.3s ease-out;
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`

const UnderstandButton = styled.button`
    background-color: transparent;
    border: none;
    color: #B00020;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    font-size: 1.35rem;
`

class NotSignedInModal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <Fragment>
        <ModalDiv style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          {this.props.children}
          <UnderstandButton onClick={this.props.modalClosed}>I Understand</UnderstandButton>
        </ModalDiv>
        <Backdrop 
          show={this.props.show}
          clicked={this.props.modalClosed} />
      </Fragment>
    )
  }
}

export default NotSignedInModal;