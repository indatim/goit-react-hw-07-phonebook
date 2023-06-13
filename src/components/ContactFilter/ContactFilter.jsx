import React from 'react';
import PropTypes from 'prop-types';
import { ContactFilterLabel, ContactFilterInput } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();

  return (
  <ContactFilterLabel>
    Find contacts by name
    <ContactFilterInput type="text" onChange={(event) => dispatch(setFilter(event.target.value))} />
  </ContactFilterLabel>
);
};


Filter.propTypes = {
  filter: PropTypes.func,
};
