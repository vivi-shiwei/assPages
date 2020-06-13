import React from 'react'
import { SchoolPage } from '../../components/layout'
import {
    Box,
    Icon,
    Link
} from '@chakra-ui/core'
import NextLink from 'next/link'
import Style from 'style-it';

const backurlHandle = (url) => {
    const urllen = url.length
    return url.map((val, index) => {
        return (
            <Box d='flex' alignItems='center'>
                {(index > 0 && index <= urllen - 1) && (<Icon mx={1} name='chevron-right' />)}
                <NextLink key={index} href={val.href} as={val.as}>
                    <Link
                        color='#1b6ac9'
                        textDecoration='underline'
                        fontWeight='bold'
                    >{val.name}
                    </Link>
                </NextLink>
            </Box>
        )
    })
}

const NewBgLayout = props => {
    return (
        <SchoolPage>
            <Box as='main' mt='4rem'>
                <Box
                    mx='auto'
                    h='45px'
                    w='100%'
                    d='flex'
                    // bg='#fff'
                    // maxWidth={{ base: '100%', sm: '100%', md: '100%', lg: '848px' }}
                    cursor='pointer'
                    alignItems='center'
                    justifyContent='center'
                    roundedTopLeft='4px'
                    roundedTopRight='4px'
                    // boxShadow={{
                    //   base: '',
                    //   sm: '',
                    //   md: '0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
                    // }}
                    className='nav-prev'
                >
                    {props.backurl && backurlHandle(props.backurl)}
                </Box>
                <Box
                    as='div'
                    w={{ base: '100%', md: '90%' }}
                    mt='2px'
                    mx='auto'
                    bg='white'
                    minH='100vh'
                    maxWidth='928px'
                    // maxWidth='992px'
                    borderRadius='4px 4px 0 0'
                    position='relative'
                    boxShadow={{
                        base: '',
                        sm: '',
                        md: '0 -1px 10px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.1), 0 10px 30px #f3ece8'
                    }}
                    className='nav-page'

                >
                    {props.children}
                </Box>
            </Box>
            <style jsx>
                {`
                .nav-prev ~ .nav-page{
                    margin-top:0 !important;
                }
                `}
            </style>
        </SchoolPage>
    )
}
export default NewBgLayout
