import React, {Component} from 'react';
import './index.css';
import Card from '../../components/list/index.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'npm常用命令',
                    presentation: 'npm 常用命令',
                    date: '2020-06-29',
                    classify: 'NodeJS',
                    label: 'npm',
                    id: 0,
                },
                {
                    title: 'Git常用命令',
                    presentation: 'Git常用命令',
                    date: '2020-04-28',
                    classify: 'NodeJS',
                    label: 'npm',
                    id: 1,
                },
                {
                    title: 'Apache压力测试参数',
                    presentation: 'ab是Apache自带的压力测试工具，它可以模拟各种条件，直接在服务器本地发起各种测试请求。 在命令行工具下输入：ab -V 可以查看ab工具的版本信息如下:',
                    date: '2020-03-27',
                    classify: '服务器',
                    label: 'Apache-压力测试',
                    id: 2,
                },
                {
                    title: 'PHP中的命名空间',
                    presentation: '命名空间对应的英文是namespace，所以翻译成中文叫命名空间，在很多的语言中，都有这个namespace，那么它用来干嘛呢？说简单点就是为了避免代码命名重复。',
                    date: '2019-12-27',
                    classify: 'Linux',
                    label: 'Linux-Git',
                    id: 3,
                },
                {
                    title: 'Linux输入输出重定向与管道',
                    presentation: '在平时的运维工作中，会经常遇到linux重定向操作和管道符。linux重定向分为输入重定向和输出重定向。简言之，输入重定向就是将文件内容导入到命令中，而输出重定向则是将原本要输出到屏幕上的信息写入到指定的文件中。',
                    date: '2019-10-26',
                    classify: 'Linux',
                    label: 'Linux-scp',
                    id: 4,
                },
                {
                    title: 'Lara系统安装',
                    presentation: '下载源码 在命令行输入 git clone https://github.com/zhangfangsong/Lara.git 下载源码， 国内网速慢的同学可以用码云：https://gitee.com/zfs/Lara.git',
                    date: '2019-09-25',
                    classify: 'Lara博客',
                    label: 'Laravel-博客-博客系统',
                    id: 5,
                },
            ]
        }
    }


    render() {
        return (<div>
            {
                this.state.data.map((m, index) => {
                    return <Card data={m} key={index}/>
                })
            }

            {/*<Card/>*/}
            {/*<Card/>*/}
        </div>)
    }
}

export default Home;
