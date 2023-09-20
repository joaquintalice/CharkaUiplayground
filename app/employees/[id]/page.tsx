'use client'
import { useParams } from 'next/navigation'

import EmployeeCard from '@/components/employees/EmployeeCard'


export default function EmployeePage() {
    const params = useParams();
    const paramId = +params.id;
    return (
        <>
            <EmployeeCard id={paramId} />
        </>
    )
}
