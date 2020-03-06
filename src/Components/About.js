import React, { Component } from 'react';
// import styled from 'styled-components';
import withLogin from './LoginHOC';

class About extends Component {
    render() {
        return (
            <div>
                <h1>소개</h1>
            </div>
        );
    }
}

export default withLogin(About);

