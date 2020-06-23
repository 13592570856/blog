import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom';

class Head extends Component {
    render() {
        return (
            <div>
                <div className='head'>
                    <h1 className='title'>
                        波波个人博客
                    </h1>
                    <p>波波个人博客是一个关注web技术的个人博客，提供一个互联网从业者的学习成果和工作经验总结。</p>
                </div>
                <nav className='nav-list'>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/database'>数据库</Link></li>
                        <li><Link to='/server'>服务器</Link></li>
                        <li><Link to='/web'>Html&Css3</Link></li>
                        <li><Link to='/javascript'>JavaScript</Link></li>
                        <li><Link to='/vue'>Vue</Link></li>
                        <li><Link to='/react'>React</Link></li>
                        <li><Link to='/node'>Node</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Head;
