import React from 'react';

const FilterPrimitive = ({ type, ...props }) => {
  const Type = type
  return (
    <Type {...props} />
  )
}

export default FilterPrimitive;
