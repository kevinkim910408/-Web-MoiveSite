import './App.css';
import {
  BrowserRouter as Router, // 해시라우터랑 다르게 #를 추가 안해도 된다.
  Switch, // 지금은 사라짐
  Route, // 라우트
  Link, // 새로고침 없이 유저를 다른페이지로 이동시켜준다
  } from "react-router-dom";

import Home from './routes/Home';
import Detail from './routes/Detail';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return  <Router>
            <Switch>
              {/* 여기에 쓰인 :id 는 useParams()에서 변경되는 url을 캐치하고 변경된 부분을 저장할 변수같은 느낌 */}
              <Route path="/movie/:id"> 
                <Detail />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
  }

export default App;
