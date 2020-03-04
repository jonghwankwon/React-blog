import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';
import Store from './Store/store';

// Content영역에 Router 컴포넌트 추가
// 이제부터 라우트 정의된 컴포넌트는 Content영역에 표시됨
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    }
  }
  // Login Func
  onLogin = () => {
    this.setState({
      logged: true
    });
  }
  // Logout Func
  onLogout = () => {
    this.setState({
      logged: false
    });

    const Provider = window.sessionStorage.getItem('provider');
    //Google AccessToken Remove
    if(Provider === 'google' ){
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signout().then(function() {
        console.log('Google Logout.')
      });
    }
    //Kakao AccessToken Remove
    else if(Provider === 'kakao' ){
      window.Kakao.Auth.logout(function() {
        console.log("Kakao logout");
      });
    }
    //SessionStorage Clear
    window.sessionStorage.clear();
  }
  componentDidMount(){
    const id = window.sessionStorage.getItem('id');
    if(id) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } =this.state;

    return ( 
      <Store.Provider value={this.state}>
        <Layout>
          <Header logged={logged} onLogout={onLogout} />
          <Navigation />
          <Content>
            <Router />
          </Content>
        </Layout>
      </Store.Provider>
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
`
export default App;
