import React from 'react'

function Button(
    {
        type="",
        clasName="",
        iconName="",
        clasNameforIcon="",
        children,
        ...props
    }
) {
  return (
    <button id='Button' className={`${clasName}`} type={type} {...props}>
       {iconName ? <i className={`${iconName} ${clasNameforIcon} `}></i>:""}
       {children}
    </button>
  )
}

export default Button
