/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import Helmet from 'react-helmet';
import Paper from 'react-md/lib/Papers';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Divider from 'react-md/lib/Dividers';
import PropTypes from 'prop-types';
import Meter from './meter';

let dateFormat = require('dateformat');
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
                <h3>{subject.name} ({subject.weight}%)</h3>
                <Divider />
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
        <li style={{ fontSize: '.9em' }} key={props.id}>{props.description} ({props.score > 0 ? '+' + props.score : props.score})</li>
    )
}

const score = (props) => {
    let score = 0;
    props.forEach(function (subject) {
        score += (subject.score * (subject.weight / 10));
    }, this);
    return <span className="totalScore">{(score / 10).toFixed(1)}</span>
}

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
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
            <Helmet
                title={props.location.name + ' Sports Despair Index'}
            />
            <header className="md-grid">
                <div className="md-cell md-cell--12 md-cell--8-tablet md-cell--4-phone">
                    {props.location.name} Sports Despair Index: Week of {dateFormat(getMonday(new Date()), "mm/dd/yyyy")}
                </div>
            </header>
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
                            <div className="md-grid">
                                <div className="md-cell md-cell--12 md-cell--8-tablet md-cell--4-phone">
                                    {score(props.location.subjects)}
                                </div>
                            </div>
                            {subjects(props.location.subjects)}
                        </section>
                        <Divider />
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