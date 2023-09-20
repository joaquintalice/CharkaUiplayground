'use client'
import { Avatar, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import EmployeeRepository from '@/repository/employees/EmployeeRepository';
import Link from 'next/link';
import { InfoIcon } from '@chakra-ui/icons';

type EmployeeData = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export default function EmployeeTable() {
    const [data, setData] = useState<EmployeeData[]>([]);
    const [index, setIndex] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const employeeData = await EmployeeRepository.getPage(index);
                setData(employeeData);
                setLoading(false);
                setError(null);
            } catch (error) {
                setLoading(false);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, [index]);

    const prevPageDisabled = index === 1;
    const nextPageDisabled = data.length === 0;

    return (
        <TableContainer maxWidth='100%'>
            {error ? (
                <div>Error: {error}</div>
            ) : loading ? (
                <div>Loading...</div>
            ) : data.length > 0 ? (
                <Table variant='striped' colorScheme='purple' size='lg'>
                    <TableCaption>Employees table</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>AVATAR</Th>
                            <Th>FIRST NAME</Th>
                            <Th>LAST NAME</Th>
                            <Th>EMAIL</Th>
                            <Th>See individual</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map(employee => (
                            <Tr key={employee.id}>
                                <Td>{employee.id}</Td>
                                <Td>
                                    <Avatar src={employee.avatar} />
                                </Td>
                                <Td>{employee.first_name}</Td>
                                <Td>{employee.last_name}</Td>
                                <Td>{employee.email}</Td>
                                <Td><Link href={`/employees/${employee.id}`}>
                                    <Button><InfoIcon /></Button>
                                </Link></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <div>No data available</div>
            )}
            <Center gap='1rem'>
                <Button
                    colorScheme='whatsapp'
                    variant='outline'
                    color='dark'
                    onClick={() => setIndex(index - 1)}
                    isDisabled={prevPageDisabled}
                >
                    Prev page
                </Button>
                <Button
                    colorScheme='whatsapp'
                    variant='outline'
                    color='dark'
                    onClick={() => setIndex(index + 1)}
                    isDisabled={nextPageDisabled}
                >
                    Next page
                </Button>
            </Center>
        </TableContainer>
    );
}
