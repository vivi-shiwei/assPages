
import React from 'react';
import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter
} from '@chakra-ui/core'

const DeleteAlert = ({ isAlertOpen, header, body, cancelRef, onAlertClose, onDelete }) => {
    return (
        <>
            {isAlertOpen && (
                <AlertDialog
                    isOpen={isAlertOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onAlertClose}
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {header}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            {body}
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onAlertClose} size='sm'>
                                取消
                </Button>
                            <Button variantColor='red' onClick={onDelete} ml={3} size='sm'>
                                刪除
                </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </>
    )
}

export default DeleteAlert
