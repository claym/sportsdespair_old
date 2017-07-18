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
    const span = 12 / props.length;
    const className = "md-cell md-cell--" + span;
    return (
        props.map((subject) =>
            <div className={className} style={{ textAlign: 'left' }} key={subject.id}>
                <h3>{subject.name}</h3>
                <Divider/>
                {factorList(subject)}
            </div>
        )
    )
}

const factorList = (props) => {
    return (
        <ul>
            {
                props.factors.map((f) => factor(f))
            }
        </ul>
    )
}

const factor = (props) => {
    return (
        <li style={{fontSize: '.9em'}} key={props.id}>{props.description} ({props.score > 0 ? '+' + props.score : props.score})</li>
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
            <header className="md-grid"><h2 className="md-cell md-cell--12">{props.location.name} Sports Despair Index: 07/17/2017</h2></header>
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
                        <Divider/>
                        <section>
                            <div className="md-grid">
                                {factors(props.location.subjects)}
                            </div>
                        </section>
                    </Paper>

                </div>
                <div className="md-cell md-cell--3 md-cell--1-tablet md-cell--phone-hidden"></div>
            </div>
        </article>
    );
};

export default ScoreboardDisplay;