/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import Paper from 'react-md/lib/Papers';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import PropTypes from 'prop-types';
import Meter from './meter';
let FrownCrown = require('../../../../static/img/Frown Crown Transparent.svg');

const subjects = (props) => {
    return (
        props.map((subject) =>
            <Meter key={subject.id} image={subject.image} score={subject.score} slider={subject.slider}/>
        )
    )
}

const ScoreboardDisplay = (props) => {

    if (props.loading) {
        return (<div>Loading...</div>);
    }

    let style = {
        width: 760,
        height: 640,
        backgroundImage: `url('${FrownCrown}')`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: -5
    }

    return (

        <div><h2>{props.location.name} Sports Despair Index: 7/10/2017</h2>
            <Paper
                style={style}
                key="1"
                zDepth={1}
                raiseOnHover={false}
                className="paper-example">
                <table className='display'>
                    <tbody>
                    {subjects(props.location.subjects)}
                    </tbody>
                </table>
            </Paper>
        </div>
    );
};

export default ScoreboardDisplay;