import React from 'react';
import FilterPrimitive from './FilterPrimitive';

const Filter = ({ ...props }) => {
  return (
    <svg>
      <defs>
        <filter id="blurMe">
          <FilterPrimitive type="feGaussianBlur" in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <g filter="url(#blurMe)">
        { props.children }
      </g>
    </svg>
  )
}

export default Filter;
