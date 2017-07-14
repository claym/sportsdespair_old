import React from 'react';
import Slider from 'react-md/lib/Sliders';

const meter = (props) => {
    const thumbStyle = {
        height: 120,
        width: 120,
        backgroundImage: `url('${props.slider}')`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
    }

    const imageStyle = {
        position: 'relative', 
        left: (props.score * 10) + '%', 
        transform: `translate3d(-${props.score * 10}%, 0, 0)`,
        height: 120
    }
    console.dir(imageStyle);
    return (
        <tr className='meter' key={props.id}>
            <td className='image'><img src={props.image} style={{ width: 120 }} /></td>
            <td className='slider'>
                <img src={props.slider} style={imageStyle} />
            </td>
            <td className='score'>{(props.score).toFixed(1)}</td>
        </tr>
    )
}

export default meter;