import React from 'react'
import {
    Box,
    Link
} from '@chakra-ui/core'

export const FullscreenViewContainer = (props) => {
    return (
        <Box
            pos='fixed'
            top={0}
            left={0}
            right={0}
            bottom={0}
            w='100%'
            h='100%'
            d='flex'
            alignItems='center'
            justifyContent='flex-start'
            flexDirection='column'
            zIndex='4000'
            overflowY='auto'
            {...props}
        />
    )
}

export const CloseLink = (props) => {
    return (
        <Link
            pos='absolute'
            top='8px'
            right='8px'
            cursor='pointer'
            {...props}
        />
    )
}
