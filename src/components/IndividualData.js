import React from 'react'
import { useState } from 'react'

export const IndividualData = ({ individualExcelData }) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.first_name}</th>
            <th>{individualExcelData.last_name}</th>
            <th>{individualExcelData.first_name + " " + individualExcelData.last_name}</th>
            <th>{individualExcelData.email}</th>
            <th>{individualExcelData.gender}</th>
            <th>{individualExcelData.mobile}</th>
            <th>{individualExcelData.time}</th>
            <th>{individualExcelData.status}</th>
        </>
    )
}

function MyComponent() {
    const [isTrue, setIsTrue] = useState(false);

    return (
        <div className={isTrue ? 'true-state' : 'false-state'}>
            <button onClick={() => setIsTrue(!isTrue)}>Toggle State</button>
        </div>
    );
}

export default MyComponent;