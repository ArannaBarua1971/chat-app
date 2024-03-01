import React from 'react'

function Input({
    type="text",
    classForInput="",
    classForLabel="",
    label="",
    name="",
    placeholder="",
    ...props
}) {
  return (
    <>
       <div className='w-[100%]'>
              <label
                htmlFor={name}
                className={`${classForLabel} block text-sm font-medium text-gray-700`}
              >
                {label}
              </label>
              <div className="mt-1">
                <input
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required
                className={`${classForInput} appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                {...props}
                />
              </div>
            </div>
    </>
  )
}

export default Input
