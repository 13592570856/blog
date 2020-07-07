import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from './router/index.js';

import Head from './components/head/index.js';
import Footer from './components/footer/index.js';

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
                        <p className='label-title'>热门文章</p>
                        <ul>
                            <li>[0] npm 常用命令</li>
                            <li>[1] Lara博客系统v1.0版本发布</li>
                            <li>[2] git时光穿梭机-版本回退</li>
                            <li>[3] Linux输入输出重定向与管道</li>
                            <li>[4] Lara系统安装</li>
                            <li>[5] Git常用命令</li>
                            <li>[6] Apache压力测试参数</li>
                            <li>[7] linux scp命令</li>
                            <li>[8] PHP中的命名空间</li>
                        </ul>
                    </div>
                        <div className='label'>
                            <p className='label-title'>最近更新</p>
                            <ul>
                                <li>[0] npm 常用命令</li>
                                <li>[1] Git常用命令</li>
                                <li>[2] Apache压力测试参数</li>
                                <li>[3] PHP中的命名空间</li>
                                <li>[4] git时光穿梭机-版本回退</li>
                                <li>[5] Linux输入输出重定向与管道</li>
                                <li>[6] linux scp命令</li>
                                <li>[7] Lara系统安装</li>
                                <li>[8] Lara博客系统v1.0版本发布</li>
                            </ul>
                        </div>
                        <div className='label'>
                            <p className='label-title'>文章归档</p>
                            <ul>
                                <li>2020年06月 (1)</li>
                                <li>2020年04月 (1)</li>
                                <li>2020年03月 (2)</li>
                                <li>2019年11月 (1)</li>
                                <li>2019年10月 (2)</li>
                                <li>2019年09月 (1)</li>
                                <li>2019年08月 (1)</li>
                            </ul>
                        </div>
                        <div className='label'>
                            <p className='label-title'>分类目录</p>
                            <ul>
                                <li>数据库
                                 </li>
                                <li>服务器</li>
                                <li>Html&Css3</li>
                                <li>JavaScript</li>
                                <li>Vue</li>
                                <li>React</li>
                                <li>Node</li>
                            </ul>
                        </div>
                        <div className='label'>
                            <p className='label-title'>分类目录</p>
                            <div className="label-tab">
                                <span>管道</span>
                                <span>Git</span>
                                <span>scp</span>
                                <span>linux</span>
                                <span>重定向</span>
                                <span>PHP</span>
                                <span>常用命令</span>
                                <span>Laravel</span>
                                <span>压力测试</span>
                                <span>博客</span>
                                <span>npm</span>
                                <span>博客系统</span>
                                <span>命名空间</span>
                                <span>Apache</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </Router>
        </div>
    );
}

export default App;
