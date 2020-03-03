// Router 설정 파일
// 별다른 기능이 없으므로 함수형으로 작성
// '/'일 경우 Home 컴포넌트를 보여주도록 정의
// exact는 주어진 경로와 정확히 맞아야지만 설정한 컴포넌트를 보여줌

// 각 경로에 컴포넌트 설정

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Login, Board, MyBoard, MyPage } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/myboard" component={MyBoard} />
        <Route path="/mypage" component={MyPage} />
    </Switch>
);

export default Router;