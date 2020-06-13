import React from 'react';
import {
    Box
} from '@chakra-ui/core'
import Layout from './layout'

const twolayout = props => (
    <Box
        width={{ base: '100%', sm: '500px', md: '555px' }}
        mt={{ base: '7px', sm: '15px' }}
        p={3}
        bg="#ffff"
        mx='auto'
        borderRadius='4px'
        {...props} />
)
export default twolayout
