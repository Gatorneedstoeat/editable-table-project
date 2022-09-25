import React, { Fragment } from 'react'
import 'h8k-components'

import { AddEmployee, Employee } from './components'

const employeesList = [
  {
    id: 0,
    name: 'Chris Hatch',
    position: 'Software Developer',
    salary: 130000,
  },
  {
    id: 1,
    name: 'Elizabeth Montgomery',
    position: 'Lead Research Engineer',
    salary: 70000,
  },
  {
    id: 2,
    name: 'Aiden Shaw',
    position: 'Machine Learning Engineer',
    salary: 80000,
  },
]

const App = () => {
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
            {employeesList.map((employee, idx) => (
              <tr key={employee.id} data-testid={`row-${idx}`}>
                <Employee idx={idx} />
              </tr>
            ))}
            <tr>
              <AddEmployee />
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default App
