import React from 'react'
import { CloseButton } from '@chakra-ui/core'

import { FullscreenViewContainer, CloseLink } from './style'

const FullscreenView = ({ closePath, children }) => {
    return (
        <FullscreenViewContainer>
            <CloseLink href={closePath}>
                <CloseButton />
            </CloseLink>
            {children}
        </FullscreenViewContainer>
    )
}

export default FullscreenView
