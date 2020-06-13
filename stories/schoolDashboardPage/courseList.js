import React from 'react'
import Container from '../../components/container'
import orderBy from 'lodash/orderBy'
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
import Fieldset from '../../components/common/fieldset'
import SchoolCard from '../../components/common/schoolCard'
import CourseForm from '../../components/common/courseForm'
import ToastMessage from '../../components/common/toastMessage'

const CourseList = (props) => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const courses = [{
        type: 'elective',
        name: '語文'
    }, {
        type: 'elective',
        name: 'yejh'
    }, {
        type: 'elective',
        name: 'dgfrg'
    }, {
        type: 'elective',
        name: 'f'
    }, {
        type: 'elective',
        name: '數學'
    }, {
        type: 'elective',
        name: '語文'
    }, {
        type: 'activity',
        name: '舞蹈'
    }, {
        type: 'activity',
        name: '芭蕾舞'
    }, {
        type: 'activity',
        name: '跆拳道'
    }, {
        type: 'activity',
        name: '嘻哈舞'
    }, {
        type: 'activity',
        name: '美術'
    }, {
        type: 'activity',
        name: '鬼步舞'
    }]


    const schooluser = {
        isAdmin: true
    }

    const initialValues = {
        name: '',
        slug: '',
        credits: '0', // credit
        type: props.type,
        englishName: '',
        term: '0'
    }

    return (
        <Container pb={4}>
            <Fieldset title={props.fieldTitle} background='#ebf8ff'>
                {
                    schooluser.isAdmin === true && (
                        <Button
                            variantColor='blue'
                            position=' absolute'
                            top='50%'
                            left=' 0'
                            transform=' translate(0, -50%)'
                            minW={{ base: '60px', md: '110px' }}
                            onClick={onOpen}
                        >
                            新增
                        </Button>
                    )
                }
            </Fieldset>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {props.modalTitle}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <CourseForm
                            type='add'
                            initialValues={initialValues}
                            defaultClsId={props.type}
                            submitHandle={(val, showCls, setSubmitting, setFieldError) => {
                                const { name, slug, type, credits, term, englishName } = val
                                const input = {
                                    name,
                                    type,
                                    slug,
                                    englishName,
                                    credits: parseFloat(credits),
                                    term: parseInt(term),
                                }

                                ToastMessage({
                                    message: error.message,
                                    title: `新增${(props.type === 'elective' ? '選修課' : '興趣課')}錯誤`,
                                    toast
                                })
                            }}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Box as='section' className='school-card-content' textAlign='center'>
                {
                    courses.map(items => {
                        return items.type == props.type ? (
                            <SchoolCard
                                title={items.name}
                                href='/school'
                            />
                        ) : ''
                    })
                }
            </Box>
        </Container>
    )
}

export default CourseList
