/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics } from './actions';

export class NavigationContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestTopics: React.propTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <Navigation {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NavigationContainer
);
