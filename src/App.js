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
  const [employees, setEmployees] = useState(employeesList);

  useEffect(() => {
    setEmployees(employeesList);

    return () => {
      // clean up state on mount and unmount
      setEmployees({});
    };
  }, []);

  const handleUpdateSalary = (employeeRecord) => {
    setEmployees((previousState) => {
      return previousState.map((item) => {
        if (item.id === employeeRecord.id) {
          return { ...employeeRecord };
        }
        return item;
      });
    });
  };
  const handleAddingEmployee = (employeeRecord) => {
    setEmployees((previousState) => {
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
                    onSave={handleUpdateSalary}
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
