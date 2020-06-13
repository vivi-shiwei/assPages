import React from 'react';
import {
    Box
} from '@chakra-ui/core'
import Layout from './layout'
const Container = props => (

    <Box
        // width='full' width='500px' mx='auto' mt={6} bg="#ffff" borderRadius='4px'
        width={{ base: '110%', sm: '500px', md: '555px' }}
        ml="-12px"
        bg="#ffff"
        borderRadius='4px'
        {...props} />
)

export default Container
