import { Card, CardBody, Heading, Stack, Image, Text, CardFooter, Button, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import EmployeeRepository from '@/employees/data/repository/EmployeeRepository'
import NotFound from '@/app/not-found';
import Loading from '@/app/loading';
import Link from 'next/link';
import UserData from '@/employees/data/interfaces/UserData.interface';

type Params = {
    id: number;
}

export default function EmployeeCard({ id }: Params) {
    const [data, setData] = useState<UserData>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getDataById() {
            try {
                const data = await EmployeeRepository.getUserById(id);
                setData(data);
                setLoading(false);
                setError(null);
            } catch (error) {
                setLoading(false);
                setError('User not found');
            }
        }
        getDataById();
    }, [id]);

    return (
        <Center>
            {
                error ? (<NotFound />) :
                    loading ? (<Loading />) :
                        data ? (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={data.avatar}
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>
                                            {data.first_name} {data.last_name}
                                        </Heading>

                                        <Text py='2'>
                                            {data.email}
                                        </Text>
                                    </CardBody>

                                    <CardFooter gap='1rem'>
                                        <Button variant='outline' colorScheme='blue'>
                                            Contact
                                        </Button>
                                        <Link href='/employees'>
                                            <Button variant='outline' colorScheme='blue'>
                                                Come back
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        ) : (<Center><Text>No data available.</Text></Center>)
            }

        </Center>
    )
}
