import React from 'react'

function TextArea({
    type="text",
    classForInput="",
    classForLabel="",
    label="",
    name="",
    placeholder="",
    ...props
}) {
  return (
    <div>
       <div>
              <label
                htmlFor={name}
                className={`${classForLabel} block text-sm font-medium text-gray-700`}
              >
                {label}
              </label>
              <div className="mt-1">
                <textarea
                  id={name}
                  name={name}
                  rows={3}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${classForInput}`}
                  defaultValue={placeholder}
                  {...props}
                />
              </div>
            </div>
    </div>
  )
}

export default TextArea
