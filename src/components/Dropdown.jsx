import React, { useState, useEffect, useRef } from 'react'

function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}


export const Dropdown = ({ data, name, defaultItem = { title: '' }, onChange }) => {
  const [selected, setSelected] = useState(defaultItem.title)

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

  const onChangeFilter = (name, value) => {
    onChange(name, value)
    setSelected(value)
  }

  const clickHandler = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const convertToKebabCase = (string) => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
  }

  return (
    <div
      className={`select ${isComponentVisible ? 'opened' : ''}`}
      onClick={() => clickHandler()}
      ref={ref}
    >
      <div className="select-title">
        {selected || defaultItem.title}
      </div>
      <div className="select-list">
        <ul>

          {defaultItem.title ? (
            <li>
              <input
                type="radio"
                id="dropdown-default"
                name={name}
                onChange={() => onChangeFilter(name, '')}
              />
              <label htmlFor="dropdown-default">{defaultItem.title}</label>
            </li>
          ) : ''}

          {data?.map(({ title }, index) => (
            <li key={index} className={title === selected ? 'current' : ''}>
              <input
                type="radio"
                id={convertToKebabCase(title)}
                name={name}
                value={title}
                onChange={() => onChangeFilter(name, title)}
              />
              <label htmlFor={convertToKebabCase(title)}>
                {title}
              </label>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}
