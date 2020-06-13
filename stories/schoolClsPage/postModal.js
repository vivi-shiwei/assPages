import React from 'react';
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton
} from '@chakra-ui/core'

const PostModal = ({ children, isOpen, onClose, type, size = '3xl', isCentered = false, isCloseButton = true }) => {
    // 彈出式編輯貼文框
    return (
        <Modal size={size} isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
            <ModalOverlay />
            <ModalContent>
                {isCloseButton && type === 'showStudent' ? (
                    <ModalCloseButton mr={5} />
                ) : isCloseButton && type !== 'showStudent' ? (
                    <ModalCloseButton />
                ) : ''}
                {type === 'showStudent' ? (
                    <Box bg='White' alignItems='center' overflowY='auto' h={{ base: '500px', sm: '600px', md: '800px' }}>
                        {children}
                    </Box>
                ) : (
                        <Box bg='White' alignItems='center'>
                            {children}
                        </Box>
                    )}
            </ModalContent>
        </Modal>
    )
}

export default PostModal
