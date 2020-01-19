import React from 'react';
import { connect } from 'react-redux';
import ThingSetter from './ThingSetter';
import ThingToggler from './ThingToggler';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {
  const { title, active } = props;
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>{`TITLE: ${title}`}</div>
      <div>{`ACTIVE: ${active}`}</div>
      <ThingSetter />
      <ThingToggler />
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.title,
  active: state.active,
});

App.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
