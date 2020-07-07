import React, {Component} from 'react';
import './index.css'
import {Link} from 'react-router-dom';

class Head extends Component {
    render() {
        return (
            <div className='list-box'>
                <div className='list-head'>
                    <Link to={{pathname: '/details', state: {id: this.props.data.id}}}>{this.props.data.title}</Link>
                </div>
                <div className='list-content'>
                    {this.props.data.presentation}
                </div>
                <div className='list-footer'>
                    发布于 <span>{this.props.data.date}</span> 。属于 <span>{this.props.data.classify}</span> 分类，被贴了 <span>{this.props.data.label}</span> 标签
                </div>
            </div>
        )
    }
}

export default Head;
