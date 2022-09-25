import React, { Fragment } from 'react'

const AddEmployee = () => {

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          placeholder='Enter Salary'
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-75 ma-0 px-25'
        >
          Add
        </button>
      </td>
    </Fragment>
  )
}

export default AddEmployee
