import React from 'react';
// import { SchoolPage } from '../layout'
import BgLayout from './bgLayout'
import {
    Box,
    Heading
} from '@chakra-ui/core'

const NewBgLayout = props => {
    return (
        <BgLayout backurl={props.backurl}>
            <Box pt='1px'>
                <Box
                    as='section'
                    mx='auto'
                    w='100%'
                    maxW={{ base: '100%', sm: '100%', md: '800px' }}
                    backgroundColor='white'
                    rounded={8}
                    transition='0.3s'
                >
                    {props.children}
                </Box>
            </Box>
        </BgLayout>
    )
}
export default NewBgLayout

const NewInputHeader = props => {
    return (
        <Box as='header' pt={4} px={16}>
            <Heading
                as='h3'
                textAlign='center'
                size='lg'

                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
            >
                {props.title}
            </Heading>

            <Heading
                textAlign='center'
                fontSize={{ base: '17px', md: '25px' }}
                mt={5}

                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
            >
                {props.schoolname}

                {
                    props.dashboradname && (
                        <Box
                            as='span'
                            display={{ base: 'none', sm: 'none', md: 'inline-block' }}
                        >
                            （{props.dashboradname}）
                        </Box>
                    )
                }

            </Heading>

            {
                props.dashboradname && (
                    <Heading
                        as='h5'
                        size='sm'
                        textAlign='center'
                        mt={4}

                        overflow='hidden'
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'

                        display={{ base: 'block', sm: 'block', md: 'none' }}
                    >
                        {props.dashboradname}
                    </Heading>
                )
            }
        </Box>
    )
}

export { NewInputHeader }
