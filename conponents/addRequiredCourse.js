import React from 'react'
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    useToast
} from '@chakra-ui/core'
import Container from './container'
import Fieldset from './fieldset'
import SchoolCard from './schoolCard'

const AddRequiredCourse = (props) => {

    return (
        <Container pb={4}>
            <Fieldset title='必修課' background='#ebf8ff'>
                <Button
                    variantColor='blue'
                    variant='solid'
                    position=' absolute'
                    top='50%'
                    left=' 0'
                    transform=' translate(0, -50%)'
                    minW={{ base: '90px', sm: '110px' }}
                >
                    新增
        </Button>
            </Fieldset>

            <Box as='section' textAlign='center'>
                <SchoolCard
                    title="語文"
                    href='#'
                />
            </Box>
        </Container>
    )
}

export default AddRequiredCourse
