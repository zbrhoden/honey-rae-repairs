import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setemployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    setemployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            {
                employees.map(
                    (employeeObject) => {
                        return <h2 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h2>
                    }
                )
            }
        </>
    )
}