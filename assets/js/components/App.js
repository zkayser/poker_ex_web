import React from 'react'
import { connect } from 'react-redux';
import { Welcome } from './Welcome';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Welcome />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAnimating: state.isAnimating
  };
}

export default connect(mapStateToProps)(App);