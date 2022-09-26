import React, { Fragment, useState, useEffect } from 'react';
import 'h8k-components';

import { AddEmployee, Employee } from './components';

const employeesList = [
  {
    id: 0,
    name: 'Chris Hatch',
    position: 'Software Developer',
    salary: 130000
  },
  {
    id: 1,
    name: 'Elizabeth Montgomery',
    position: 'Lead Research Engineer',
    salary: 70000
  },
  {
    id: 2,
    name: 'Aiden Shaw',
    position: 'Machine Learning Engineer',
    salary: 80000
  }
];

const App = () => {
  const [employees, setEmployees] = useState([]);
  // set employeeList object to state
  useEffect(() => {
    setEmployees(employeesList);
    // reset state on mount and unmount
    return () => setEmployees([]);
  }, []);

  /**
   * merge the salary change for an employee salary edit
   * @param {Object} employeeRecord - id:number, name:string, postion:string, salary:number
   */
  const handleSalaryUpdate = (employeeRecord) => {
    setEmployees((previousState) => {
      return previousState.map((item) => {
        if (item.id === employeeRecord.id) {
          return { ...employeeRecord };
        }
        return item;
      });
    });
  };
  /**
   * Create sequential ID for record and concat to state object
   * @param {Object} employeeRecord - id:number, name:string, postion:string, salary:number
   */
  const handleAddingEmployee = (employeeRecord) => {
    setEmployees((previousState) => {
      let maxID = Math.max(...previousState.map((item) => item.id));
      employeeRecord.id = maxID + 1;
      return [...previousState, employeeRecord];
    });
  };
  return (
    <Fragment>
      <nav>
        <h1>Editable Table</h1>
      </nav>
      <div className="card w-45 mx-auto mt-100 pb-5">
        <table data-testid="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employeeInfo, idx) => (
                <tr key={employeeInfo.id} data-testid={`row-${idx}`}>
                  <Employee
                    employeeInfo={employeeInfo}
                    idx={idx}
                    onSave={handleSalaryUpdate}
                  />
                </tr>
              ))}
            <tr>
              <AddEmployee onSave={handleAddingEmployee} />
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default App;
