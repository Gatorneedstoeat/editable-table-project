import React, { Fragment, useState } from 'react';

/**
 * Table data component to add new employee
 * @param {func} onSave - callback when a new employee save button clicked
 * @returns {JSX} AddEmployee
 */
const AddEmployee = ({ onSave }) => {
  const [employeeRecord, setEmployeeRecord] = useState({
    name: '',
    position: '',
    salary: ''
  });

  /**
   * set the state object property for the input
   * @param {Object} event - event obj from input
   */
  const handleInput = (event) => {
    const { name, value } = event.target;
    setEmployeeRecord((previousState) => ({
      ...previousState,
      [name]: value
    }));
  };

  /**
   * Save the record to the parent
   */
  const handleSave = () => {
    // save record
    onSave(employeeRecord);
    // reset employee record
    setEmployeeRecord({
      name: '',
      position: '',
      salary: ''
    });
  };

  return (
    <Fragment>
      <td className="pl-30">
        <input
          aria-label="New Employee Name Input"
          name="name"
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          value={employeeRecord.name}
          onChange={(event) => handleInput(event)}
        />
      </td>
      <td className="pl-20">
        <input
          aria-label="New Employee Position Input"
          name="position"
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          value={employeeRecord.position}
          onChange={(event) => handleInput(event)}
        />
      </td>
      <td className="pl-20">
        <input
          aria-label="New Employee Salary Input"
          name="salary"
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          value={employeeRecord.salary}
          onChange={(event) => handleInput(event)}
        />
      </td>
      <td className="pl-20">
        <button
          aria-label="Add New Employee Button"
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
          disabled={Object.values(employeeRecord).includes('')}
          onClick={handleSave}
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
