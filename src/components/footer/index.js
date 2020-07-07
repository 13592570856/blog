import React, {Component} from 'react';
import './index.css';
class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                <div className='footer-like'>
                    <ul>
                        <li>友情链接：</li>
                        <li>张仿松博客</li>
                        <li>Lara博客</li>
                        <li>窝心美文</li>
                        <li>smile小站</li>
                    </ul>
                </div>
                <div className='footer-audit'>
                    <span>浙ICP备16000810号-2 </span>
                </div>

            </div>

        )
    }
}

export default Footer;
