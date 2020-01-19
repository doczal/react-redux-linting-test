import React from 'react';
import { connect } from 'react-redux';
import { setThing, toggleThing } from './redux/actions';
import PropTypes from 'prop-types';

const ThingToggler = (props) => {
  const { toggleThing } = props;
  return (
    <button type="button" onClick={() => toggleThing()}>
      TOGGLE_THING
    </button>
  );
};

ThingToggler.propTypes = {
  toggleThing: PropTypes.func,
};

const mapStateToProps = (state) => ({
  active: state.active,
});

const mapDispatchToProps = {
  setThing,
  toggleThing,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThingToggler);
