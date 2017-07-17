/*eslint no-unused-vars: "error"*/
import React from 'react';
import Slider from 'react-md/lib/Sliders';


const meter = (props) => {

    const spanStyle = {
        width: `${(props.score * 10)}%`,
    }
    return (
        <div className="md-grid">
            <div className='md-cell md-cell--middle md-cell--1 md-cell--tablet-hidden md-cell--phone-hidden'></div>
            <div className='image md-cell md-cell--middle md-cell--2 md-cell--2-tablet md-cell--1-phone'>
                <img className='subject' src={props.image} />
            </div>
            <div className='slider md-cell md-cell--middle md-cell--right md-cell--6 md-cell--4-tablet md-cell--2-phone' style={{textAlign: 'left', whiteSpace: 'nowrap'}}>
                { /** <div className="md-slider-track"><img src={props.slider} style={imageStyle}/></div> **/}
                <div style={{display: `inline-block`, width: `100%`, verticalAlign: 'middle'}}>
                    <span className="slider" style={spanStyle}>&nbsp;</span>
                    <img className='button' src={props.slider}/>
                </div>
            </div>
            <div className='score md-cell md-cell--middle md-cell--2 md-cell--2-tablet md-cell--1-phone'>{ props.score == 10 ? props.score : (props.score).toFixed(1)}</div>
            <div className='md-cell md-cell--middle md-cell--1 md-cell--tablet-hidden md-cell--phone-hidden'></div>
        </div>
    )
}

export default meter;