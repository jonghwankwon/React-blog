import React, { Component } from 'react';
// import styled from 'styled-components';
import withLogin from './LoginHOC';

class MyPage extends Component {
    render() {
        return (
            <div>
                <h1>MyPage</h1>
            </div>
        );
    }
}

export default withLogin(MyPage);

