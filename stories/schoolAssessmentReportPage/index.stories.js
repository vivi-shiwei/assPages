import React from 'react';
import {
    Flex,
    Heading,
    Divider,
    Text,
    Link,
    Box
} from '@chakra-ui/core'

import NextLink from 'next/link'
import moment from 'moment'

import { SchoolPage } from '../../components/layout'
import Container from '../../components/container'
import App from '../../App'

const AssessmentReportsPage = () => {
    const assessmentReports = [
        { activeAt: '2020-06-11 16:10', inactiveAt: '2020-06-11 16:10', name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼高班)' },
        { activeAt: '2020-06-11 16:10', inactiveAt: '2020-06-11 16:10', name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼低班)' },
        { activeAt: '2020-06-11 16:10', inactiveAt: '2020-06-11 16:10', name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼兒班)' },
        { activeAt: '2020-06-11 16:10', inactiveAt: '2020-06-11 16:10', name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼中班)' },
        { activeAt: '2020-06-11 16:10', inactiveAt: '2020-06-11 16:10', name: '2019-2020年度第一學段《幼兒基本學力要求》評估表(幼師班)' }
    ];
    return (
        <SchoolPage>
            <Flex mt={16} align='center' justify='center'>
                <Container width={{ sm: '100%', md: '75%' }} minHeight='1024px' bg='White'>
                    <Heading textAlign='center' mb='1' mt='5'>學習評估表列表</Heading>

                    <Divider ml='2' mr='2' mb='5' borderColor='Black' />

                    {assessmentReports.map(doc => {
                        const startTime = moment(doc.activeAt).format('YYYY-MM-DD HH:mm')
                        const endTime = moment(doc.inactiveAt).format('YYYY-MM-DD HH:mm')
                        return (
                            <Box textAlign='center'>
                                <NextLink
                                    href='#'
                                    passHref
                                >
                                    <Link fontSize={{ base: 'lg', sm: 'xl' }}>
                                        {doc.name}
                                    </Link>
                                </NextLink>
                                <Text color='gray.400' fontSize={{ base: 'sm', sm: 'md' }}>
                                    {`開放時間: ${startTime} - ${endTime}`}
                                </Text>
                                <Divider ml='10' mr='10' />
                            </Box>
                        )
                    })}
                </Container>
            </Flex >
        </SchoolPage >
    )
}

export default { title: 'Report' };

export const Report = () => App(AssessmentReportsPage);