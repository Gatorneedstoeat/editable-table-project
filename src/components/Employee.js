import React, { Fragment, useState } from 'react';

/**
 * Displays the employee table data for the row
 * @param {number} idx - index from the parent loop
 * @param {Object} employeeInfo - id:number, name:string, postion:sting, salary:number
 * @param {func} onSave - Callback when an employees salary is updated
 * @returns {JSX} Employee
 */
const Employee = ({ idx, employeeInfo, onSave }) => {
  const [editSalary, setEditSalary] = useState(true);
  const { name, position, salary } = employeeInfo;
  const [salaryInputValue, setSalaryInputValue] = useState(salary);

  /**
   * handle save
   */
  const handleSave = () => {
    // set inverse of current state
    setEditSalary(!editSalary);
    // update passed employee info with new salary
    employeeInfo.salary = salaryInputValue;
    // callback to save new salary
    onSave(employeeInfo);
  };
  return (
    <Fragment>
      <td>{name}</td>
      <td className="pl-20">{position}</td>
      <td className="pl-20">
        {editSalary ? (
          <div
            data-testid={'employee-salary-div-' + idx}
            onClick={() => setEditSalary(false)}
          >
            {salary}
          </div>
        ) : (
          <input
            data-testid={'employee-salary-input-' + idx}
            type="number"
            value={salaryInputValue}
            onChange={(event) => setSalaryInputValue(event.target.value)}
          />
        )}
      </td>
      <td className="pl-20">
        <button
          className={'x-small w-75 ma-0 px-25'}
          data-testid={'employee-save-button-' + idx}
          disabled={editSalary}
          onClick={handleSave}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
