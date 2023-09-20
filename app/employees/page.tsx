import EmployeeTable from '@/components/employees/EmployeeTable';
import { Center, Heading, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react'
import Loading from '../loading';


export default async function EmployeesPage() {
    return (
        <>
            <Center my={{ base: '2rem' }}>
                <Heading as='h1'>
                    <Text>Employee's list</Text>
                </Heading>
            </Center>
            <Suspense fallback={<Loading />}>
                <EmployeeTable />
            </Suspense>

        </>
    )
}
