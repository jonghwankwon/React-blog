import React, { Component } from 'react';
// import styled from 'styled-components';
import withLogin from './LoginHOC';

class MyBoard extends Component {
    render() {
        return (
            <div>
                <h1>내 글 보기</h1>
            </div>
        );
    }
}

export default withLogin(MyBoard);
