'use client'
import { Avatar, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

type dataProps = {
    dataEmployee: [{
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }]
}

export default function EmployeeTable({ dataEmployee }: dataProps) {
    return (
        <TableContainer maxWidth='100%'>
            <Table variant='striped' colorScheme='purple' size='lg'>
                <TableCaption>Employees table</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>AVATAR</Th>
                        <Th>FIRST NAME</Th>
                        <Th>LAST NAME</Th>
                        <Th>EMAIL</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dataEmployee.map(employee => (
                        <Tr key={employee.id}>
                            <Td>{employee.id}</Td>
                            <Td>
                                <Avatar src={employee.avatar} />
                            </Td>
                            <Td>{employee.first_name}</Td>
                            <Td>{employee.last_name}</Td>
                            <Td>{employee.email}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
