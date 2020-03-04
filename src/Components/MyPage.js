//내 정보 관리
import React, { Component } from 'react';
import styled from 'styled-components';
import withLogin from './LoginHOC';

class MyPage extends Component {
    render() {
        return (
            <div>
                Mypage
            </div>
        )
    }
}

export default withLogin(MyPage);