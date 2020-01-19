import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setThing, toggleThing } from './redux/actions';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

const ThingSetter = (props) => {
  const { setThing } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('update!');
  });

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => setThing(value)}>
        SET_THING
      </button>
    </div>
  );
};

ThingSetter.propTypes = forbidExtraProps({
  setThing: PropTypes.func,
});

const mapStateToProps = (state) => ({
  title: state.title,
  active: state.active,
});

const mapDispatchToProps = {
  setThing,
  toggleThing,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThingSetter);
