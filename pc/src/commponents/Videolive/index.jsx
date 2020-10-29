import React, { Component } from 'react'
//引入依赖
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import videojs from 'video.js'
import './videolive.less'
const url = [
    {
        url:"rtmp://58.200.131.2:1935/livetv/hunantv",
        name:"湖南卫视"
    },
    {
        url:"rtmp://202.69.69.180:443/webcast/bshdlive-pc",
        name:"香港财经"
    },
    {
        url:"rtmp://58.200.131.2:1935/livetv/dftv",
        name:"东方卫视"
    },
    {
        url:"rtmp://58.200.131.2:1935/livetv/hubeitv",
        name:"湖北卫视"
    },
    {
        url:"rtmp://58.200.131.2:1935/livetv/cctv1",
        name:"中央一套"
    },
]
export default class Videolive extends Component {
    constructor(props){
        super(props)
        this.state={
            nowPlay:''
        }
    }
    //组件挂载完成之后初始化播放控件
    componentDidMount(){
        const videoJsOptions = {
                autoplay: true,
                controls: true,
                sources: [{
                    src: 'rtmp://58.200.131.2:1935/livetv/hunantv',
                    type: 'rtmp/flv'
                    }]
              }
            this.player = videojs('my-video', videoJsOptions , function onPlayerReady() { //(id或者refs获取节点，options，回调函数)
                videojs.log('Your player is ready!');
                // In this context, `this` is the player that was created by Video.js.
                this.play();
                // How about an event listener?
                this.on('ended', function() {
                  videojs.log('Awww...over so soon?!');
                });
              }); 
    }
    handleClick(item){
        if(item.name===this.state.nowPlay){
            return
        }
        this.setState({
            nowPlay:item.name
        })
            this.player.pause();
            this.player.src(item.url);
            this.player.load();
            this.player.play();
    }

    render() {
        let li = {
            background:'#823edb',
            width:"212.22px",
            display:"block",
        }
        let playing = {
            background: "#ad9dc2",
            width:"212.22px",
            display:"block",
          
            
        }
        return (
              <div className='live'>
                    <div className='live-list'>
                    <div className="live-title-logo">直播列表</div>
                    <ul style={{listStyleType:"none",float:"left",textAlign:"center" }}>
                    {
                        url.map((item,index)=>{
                            return <li style={{width:'212.22px',fontsize:'12px',marginTop:"2px"}} key={item.name} onClick={()=>this.handleClick(item)}>
                                        <span style={this.state.nowPlay===item.name?playing:li}>{item.name}</span>
                                    </li>
                        })
                    }
                    </ul>
                    </div>
                    <div className="live-player">
                    <video style={{width:"50vw",height:"100vh",margin:"0 auto"}} id="my-video" className="video-js vjs-default-skin">
                    </video>
                    </div>
            </div>   
        )
    }
}
