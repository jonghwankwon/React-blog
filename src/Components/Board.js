import React, { Component } from 'react';
// import styled from 'styled-components';
import withLogin from './LoginHOC';

class Board extends Component {
    render() {
        return (
            <div>
                <h1>게시판</h1>
            </div>
        );
    }
}

export default withLogin(Board);

