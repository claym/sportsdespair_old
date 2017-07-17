/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import Paper from 'react-md/lib/Papers';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Divider from 'react-md/lib/Dividers';
import PropTypes from 'prop-types';
import Meter from './meter';
let FrownCrown = require('../../../../static/img/Frown Crown Transparent.svg');

const subjects = (props) => {
    return (
        props.map((subject) =>
            <Meter key={subject.id} image={subject.image} score={subject.score} slider={subject.slider} />
        )
    )
}
const factors = (props) => {
    return (

        props.map((factor) =>
            <div>{factor.image}</div>
        )
    )    
}

const ScoreboardDisplay = (props) => {

    if (props.loading) {
        return (<div>Loading...</div>);
    }

    let style = {
        backgroundImage: `url('${FrownCrown}')`,

    }

    return (
        <article className="scoreboard">
            <header className="md-grid"><h2 className="md-cell md-cell--12">{props.location.name} Sports Despair Index: 7/10/2017</h2></header>
            <div className="md-grid">
                <div className="md-cell md-cell--3 md-cell--1-tablet md-cell--phone-hidden"></div>
                <div className="md-cell md-cell--6 md-cell--6-tablet md-cell--4-tablet">
                    <Paper
                        style={style}
                        key="1"
                        zDepth={1}
                        raiseOnHover={false}
                        className="paper">
                        <section>
                            {subjects(props.location.subjects)}
                        </section>
                        <Divider inset />
                        <section>
test test test
                        </section>
                    </Paper>

                </div>
                <div className="md-cell md-cell--3 md-cell--1-tablet md-cell--phone-hidden"></div>
            </div>
        </article>
    );
};

export default ScoreboardDisplay;