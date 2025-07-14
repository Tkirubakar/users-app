import React from 'react';

function SearchField({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchField;