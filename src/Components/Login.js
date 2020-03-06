// 로그인 페이지
// Google 로그인 구현
// 1. API 발급 ( https://console.cloud.google.com/apis/ )
// 2. 패키지 설치 ( npm add react-google-login)
// kakao 로그인 구현
// 1. API 발급 ( https://developers.kakao.com/ )
// 2. 패키지 설치 ( npm add react-kakao-login )
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import  KakaoLogin  from 'react-kakao-login';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
// import { graphql, compose } from 'react-apollo';
// import {login } from '../queries';

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
    // 로그인에 성공하면 Json을 반환 -> responseGoogle함수에서 state에 id, name을 저장
    responeseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        });
        // this.doSignUp();
        this.props.onLogin();
        this.props.history.push('/');
    }
    // kakao login
    responeseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        });
        // this.doSignUp();
        this.props.onLogin();
        this.props.history.push('/');
    }

    // Login Fail
    // 로그인에 실패한 경우에는 에러를 넘겨줌 -> responseFail함수에서 error 출력
    responeseFail = (err) => {
        console.log(err);
    }
    // Login Fail
    resoponseFail = (err) => {
        console.error(err);
    }
     //Login  Mutation
    //  doSignUp = async () => {
    //     const { id, name, provider } = this.state;
    //     const user = await this.props.LoginMutation({
    //         variavles: {
    //             id: String(id),
    //             name,
    //             provider
    //         }
    //     });

    //     if(user.data.login){
    //         window.sessionStorage.setItem("id",id);
    //         window.sessionStorage.setItem('name', name);
    //         window.sessionStorage.setItem('provider', provider);
    //         this.props.onLogin();
    //         this.props.history.push('/');
    //     }
    //     else
    //     alert("로그인에 실패하였습니다.");
    // }

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={"283738042758-pedrdsv7uqgt8dvpo09oceaieb02j38s.apps.googleusercontent.com"} // 구글에서 발급받은 API KEY 값
                    buttonText="Google Login"               // 버튼에 보여질 텍스트
                    onSuccess={this.responeseGoogle}        // 로그인 인증에 성공한 경우 실행할 함수 정의
                    onFailure={this.responeseFail}          // 로그인 인증에 실패한 경우 실행할 함수 정의
                />
                <KakaoButton
                    jskey={"bdd3a6c8936e20cd80e94e9d2dcd638a"}
                    buttonText="Kakao Login"
                    onSuccess={this.responeseKakao}
                    onFailure={this.responeseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}
const Container = styled.div`
    display: flex;
    flex-flow: column wrap;`

const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;`

export default withRouter(Login);