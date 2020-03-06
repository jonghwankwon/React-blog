import React, { Component } from 'react';
import Store from '../Store/store';
import Login from './Login';

const LoginContainer = () => {
    return(
        //store에 저장된 value를 사용하기 위해 Store.Consumer를 받을 컨테이너 컴포넌트 생성
    <Store.Consumer> 
        {store => (
            <Login onLogin={store.onLogin}/> // Login 컴포넌트에 Store에 저장된 onLogin함수를 넣어줌
        )}
    </Store.Consumer>
    )}

export default LoginContainer;