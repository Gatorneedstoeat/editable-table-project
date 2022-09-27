import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
/**
 * Displays the employee table data for the row
 * @param {number} idx - index from the parent loop
 * @param {Object} employeeInfo - id:number, name:string, postion:string, salary:number
 * @returns {JSX} Employee
 */
const Employee = ({ idx, employeeInfo }) => {
  const [editSalary, setEditSalary] = useState(false);
  const [salaryInputValue, setSalaryInputValue] = useState('');
  const [employeeRecord, setEmployeeRecord] = useState({});

  /**
   * set state when the passed prop changes (for new employees)
   */
  useEffect(() => {
    // create immutable object so it doesn't effect the parent state
    setEmployeeRecord({ ...employeeInfo });
    setSalaryInputValue(employeeInfo.salary);
    // clear state on unmount
    return () => {
      setEmployeeRecord({});
      setSalaryInputValue('');
      setEditSalary(false);
    };
  }, [employeeInfo]);

  /**
   * handle saving the employees salary
   */
  const handleSave = () => {
    // set inverse of current state
    setEditSalary(!editSalary);
    // set new salary
    setEmployeeRecord((previousState) => ({
      ...previousState,
      salary: salaryInputValue
    }));
  };

  return (
    <Fragment>
      <td>{employeeRecord.name}</td>
      <td className="pl-20">{employeeRecord.position}</td>
      <td className="pl-20">
        {!editSalary ? (
          <div
            data-testid={'employee-salary-div-' + idx}
            onClick={() => setEditSalary(true)}
          >
            {employeeRecord.salary}
            <FontAwesomeIcon icon={faPen} />
          </div>
        ) : (
          <input
            aria-label="Employee Salary Input"
            data-testid={'employee-salary-input-' + idx}
            type="number"
            value={salaryInputValue}
            onChange={(event) => setSalaryInputValue(event.target.value)}
          />
        )}
      </td>
      <td className="pl-20">
        <button
          aria-label="Employee Save Button"
          className={'x-small w-75 ma-0 px-25'}
          data-testid={'employee-save-button-' + idx}
          disabled={
            !editSalary ||
            isNaN(parseInt(salaryInputValue)) ||
            parseInt(employeeRecord.salary) === parseInt(salaryInputValue) ||
            parseInt(salaryInputValue) === 0
          }
          onClick={handleSave}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
