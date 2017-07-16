import React from 'react';
import Slider from 'react-md/lib/Sliders';


const meter = (props) => {
    const thumbStyle = {
        background: `none`,
        backgroundImage: `url('${props.slider}')`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        height: 100,
        width: 100,
        top: -60,
        left: `calc(${props.score * 10}% - 60px) !important`
    }

    const imageStyle = {
        position: `absolute`,
        transform: `translate(-50%,-50%)`,
        verticalAlign: `middle`,
    }
    const spanStyle = {
        width: `${(props.score * 10)}%`,
    }

    console.dir(imageStyle);
    return (
        <div className="md-grid">
            
            <div className='image md-cell md-cell--middle md-cell--3 md-cell--2-tablet md-cell--1-phone' style={{textAlign: `right`}}>
                <img className='subject' src={props.image} />
            </div>
            <div className='slider md-cell md-cell--middle md-cell--right md-cell--6 md-cell--4-tablet md-cell--2-phone' style={{textAlign: 'left', whiteSpace: 'nowrap'}}>
                { /** <div className="md-slider-track"><img src={props.slider} style={imageStyle}/></div> **/}
                <div style={{display: `inline-block`, width: `100%`, verticalAlign: 'middle'}}>
                    <span className="slider" style={spanStyle}>&nbsp;</span>
                    <img className='button' src={props.slider} style={imageStyle}/>
                </div>
            </div>
            <div className='score md-cell md-cell--middle md-cell--3 md-cell--2-tablet md-cell--1-phone'>{(props.score).toFixed(1)}</div>
            
        </div>
    )
}

export default meter;