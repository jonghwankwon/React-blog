// 로그인 페이지
// Google 로그인 구현
// 1. API 발급 ( https://console.cloud.google.com/apis/ )
// 2. 패키지 설치 ( npm add react-google-login)
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google=login';
import styled from 'styled-components';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',        // 로그인 하는 유저가 가지고 있는 고유 번호
            name: '',       // 유저 이름
            provider: '',   // 구글 로그인인지 카카오 로그인인지 확인
        }
    }
    // Google Login
    responeseGoogle = (res) => {
        console.log(res)
    }

    // Login Fail
    responeseFail = (err) => {
        console.log(err);
    }

    render() {
        return (
            <Container>
                <GoogleLogin
                clientId={process.env.REACT_APP_Google} // 구글에서 발급받은 API KEY 값
                buttonText="Google Login"               // 버튼에 보여질 텍스트
                onSuccess={this.responeseGoogle}        // 로그인 인증에 성공한 경우 실행할 함수 정의
                onFailure={this.responeseFail}          // 로그인 인증에 실패한 경우 실행할 함수 정의
                />
            </Container>
        );
    }
}
const Container = styled.div`
    display: flex;
    flex-flow: column wrap;`

    export default Login;