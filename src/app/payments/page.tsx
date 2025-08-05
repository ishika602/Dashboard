import React from 'react'
import { Payment,columns } from './columns';
import { DataTable } from './data-table';
const getData=async(): Promise<Payment[]>=>{
      return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "828ed52f",
      amount: 101,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "928ed52f",
      amount: 102,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "128ed52f",
      amount: 103,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "228ed52f",
      amount: 104,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "828ed52f",
      amount: 101,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "928ed52f",
      amount: 102,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "128ed52f",
      amount: 103,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "228ed52f",
      amount: 104,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "828ed52f",
      amount: 101,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "928ed52f",
      amount: 102,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "128ed52f",
      amount: 103,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    {
      id: "228ed52f",
      amount: 104,
      status: "pending",
      username:"john doe",
      email: "m@example.com",
    },
    // ...
  ]
}
const PaymentsPage = async() => {
    const data= await getData();
  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default PaymentsPage
