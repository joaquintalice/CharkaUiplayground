import EmployeeTable from '@/components/EmployeeTable';
import { Center, Grid, Heading, Text } from '@chakra-ui/react';
import React, { Suspense } from 'react'
import Loading from '../loading';

const URL = 'https://reqres.in/api/users?page=2'

async function getData() {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`Status code ${res.status}`)
    const dataFetched = await res.json();
    console.log(dataFetched)
    const { data } = dataFetched
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(dataFetched.data)
        }, 3000);
    })
}

type propsData = [{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}]


export default async function EmployeesPage() {
    const employees: propsData = await getData();
    return (
        <>
            <Center my={{ base: '2rem' }}>
                <Heading as='h1'>
                    <Text>Employee's list</Text>
                </Heading>
            </Center>
            <Suspense fallback={<Loading />}>
                <EmployeeTable dataEmployee={employees} />
            </Suspense>

        </>
    )
}
