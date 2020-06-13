import React, { useState } from 'react'
import {
    Box,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useToast
} from '@chakra-ui/core'

const DelAlert = (props) => {
    const [isOpen, setIsOpen] = useState()
    const toast = useToast()
    const onClose = () => (setIsOpen(false))

    return (
        <>
            <Box as='span' display={{ base: 'block', sm: 'block', md: 'inline-block' }} onClick={() => setIsOpen(true)}>
                {props.children}
            </Box>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {props.title}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {props.content}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button onClick={onClose}>
                            取消
                        </Button>
                        <Button
                            variantColor='red'
                            onClick={onClose}
                            ml={3}
                        >
                            删除
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </>
    )
}

export default DelAlert
