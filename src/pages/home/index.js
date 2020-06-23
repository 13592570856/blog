import React, {Component} from 'react';
import './index.css';
import Card from'../../components/list/index.js';

class Home extends Component {
    render() {
        return (<div>
            <Card/>
            <Card/>
            <Card/>
        </div>)
    }
}

export default Home;
