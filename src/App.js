import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';
// Content영역에 Router 컴포넌트 추가
// 이제부터 라우트 정의된 컴포넌트는 Content영역에 표시됨
class App extends Component {
  render() {
    return ( 
      <Layout>
        <Header />
        <Navigation />
        <Content>
          <Router />
        </Content>
      </Layout>
    );
  }
}

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;`

export default App;
