import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from './router/index.js';

import Head from './components/head/index.js';

function App() {
    return (
        <div className="App">
            <Router>
                <Head/>
                <div className="body">
                    <div className='main'>
                        <Switch>
                            {routers.map((r, key) => (
                                <Route
                                    component={r.component}
                                    exact={!!r.exact}
                                    key={key}
                                    path={r.path}
                                />
                            ))}
                        </Switch>
                    </div>
                    <div className='right'>
                        <div className='search'>
                            <input type="text"/>
                            <button>
                                搜索
                            </button>
                        </div>
                        <div className='label'>
                            <p>热门文章</p>
                            <ul>
                                <li>[0]git常用命令</li>
                                <li>[1]git常用命令</li>
                                <li>[2]git常用命令</li>
                                <li>[3]git常用命令</li>
                                <li>[4]git常用命令</li>
                                <li>[5]git常用命令</li>
                                <li>[6]git常用命令</li>
                                <li>[7]git常用命令</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
