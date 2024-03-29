/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import Paper from 'react-md/lib/Papers';
import PropTypes from 'prop-types';
import ScoreboardDisplay from './components/scoreboardDisplay'
import locationQuery from './queries/location.gql'
import { graphql } from 'react-apollo';

@graphql(locationQuery, {
    options: (props) => ({
        variables: {
            locationName: 'Charlotte',
            endDate: new Date(),
            startDate: new Date(),
            endNull: null
        },
    }),
})
class ScoreboardModule extends React.Component {
    static propTypes = {
        data: PropTypes.shape({
            allMessages: PropTypes.arrayOf(
                PropTypes.shape({
                    loading: PropTypes.bool.isRequired,
                    Location: PropTypes.object.isRequired,
                }),
            ),
        }),
    }
    render() {
        const { data } = this.props;
        return (
            <ScoreboardDisplay loading={data.loading} location={data.Location} />
        )
    }
}

ScoreboardModule.PropTypes = {

}

export default ScoreboardModule;