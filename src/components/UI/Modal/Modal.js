import React, { Fragment } from 'react';
import styled from 'styled-components';
import Backdrop from '../../UI/Backdrop/Backdrop';

const ModalDiv = styled.div`
    position: fixed;
    z-index: 100;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: opacity 0.4s ease-out, transform 0.3s ease-out;
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`

const modal =  (props) => {
  return (
    <Fragment>
      <ModalDiv style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
        {props.children}
      </ModalDiv>
      <Backdrop show={props.show} />
    </Fragment>
  )
}

export default modal;