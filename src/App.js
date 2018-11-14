import React, { Component } from 'react';
import Device from './components/Device';
import styled from 'styled-components';

const AppConteiner = styled.div`
  width: 100%;
  margin: auto;
`;

export default class App extends Component {
  render() {
    return (
      <AppConteiner className="App">
        <Device/>
      </AppConteiner>
    );
  };
};