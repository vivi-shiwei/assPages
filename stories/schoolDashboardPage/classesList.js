import React, { useRef } from 'react'
import Container from '../../components/container'
import { Formik, Field, Form } from 'formik'
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormErrorMessage,
    useDisclosure,
    useToast
} from '@chakra-ui/core'
import Style from 'style-it';

import Fieldset from '../../components/common/fieldset'
import SchoolCard from '../../components/common/schoolCard'

import ToastMessage from '../../components/common/toastMessage'

const initialValues = {
    name: '',
    englishName: '',
    slug: ''
}
const schooluser = {
    isAdmin: true
}

const classes = [{
    name: '幼兒班'
}, {
    name: '初幼班'
}, {
    name: '初1班'
}, {
    name: '初二班'
}, {
    name: '初三班'
}, {
    name: '初四班'
}]
const ClassesList = ({ schoolDashboardId, schoolId }) => {
    const classesRef = useRef()
    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const validateName = (value) => {
        return (!value) ? '該選項不可為空！' : ''
    }

    return (
        <Container pb={4}>
            <Fieldset title='班級' background='#ebf8ff'>
                {schooluser.isAdmin === true && (
                    <Button
                        variantColor='blue'
                        position=' absolute'
                        top='50%'
                        left=' 0'
                        transform=' translate(0, -50%)'
                        minW={{ base: '60px', sm: '100px' }}
                        onClick={onOpen}
                    >
                        新增
                    </Button>
                )}
            </Fieldset>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>新增班級</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values, { setSubmitting, setFieldError }) => {
                                const { name, englishName, slug } = values
                                const input = {
                                    name,
                                    englishName,
                                    slug,
                                    schoolDashboardId: schoolDashboard.id,
                                    schoolId
                                }
                                ToastMessage({
                                    message: error.message,
                                    title: '新增班級錯誤',
                                    toast
                                })
                            }}
                        >
                            {({ props, isSubmitting }) => (
                                <Form>
                                    <Field name='name' validate={validateName}>
                                        {({
                                            field, // 包含field的onChange ， onBlur ， name和value的对象
                                            form: { touched, errors }, // Formik袋
                                            meta // 包含有关字段的元数据（即value ， touched ， error和initialValue ）的initialValue
                                        }) =>
                                            (
                                                <FormControl pt={5} isInvalid={errors.name && touched.name}>
                                                    <FormLabel>班級名稱</FormLabel>
                                                    <Input maxWidth='98%' {...field} />
                                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                    </Field>
                                    <Field name='englishName'>
                                        {({
                                            field,
                                            form: { touched, errors },
                                            meta
                                        }) =>
                                            (
                                                <FormControl pt={5}>
                                                    <FormLabel>班級英文名稱</FormLabel>
                                                    <Input maxWidth='98%' {...field} />
                                                </FormControl>
                                            )}
                                    </Field>
                                    <Field name='slug'>
                                        {({
                                            field,
                                            form: { touched, errors },
                                            meta
                                        }) =>
                                            (
                                                <FormControl pt={5} isInvalid={errors.slug && touched.slug}>
                                                    <FormLabel>班級代號</FormLabel>
                                                    <Input maxWidth='98%' {...field} />
                                                    <FormErrorMessage>{errors.slug}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                    </Field>
                                    <Box textAlign='center'>
                                        <Button
                                            variantColor='blue'
                                            minW={{ base: '100%', sm: '200px', md: '200px' }}
                                            mr={3}
                                            mt={8}
                                            type='submit'
                                            isLoading={isSubmitting}
                                        >
                                            添加
                    </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Box as='section' className='school-card-content' textAlign='center'>
                {
                    classes.map(cls => {
                        return (
                            <SchoolCard
                                title={cls.name}
                                href='/school'
                            />
                        )
                    })
                }
                <style jsx>
                    {`
          .school-card-content:empty {
            min-height: 20px
          }
          @media screen and (min-width: 40em) {
            .school-card-content:empty {
              min-height: 70px
            }
          }
          
          @media screen and (min-width: 52em) {
            .school-card-content:empty {
              min-height: 90px
            }
          }
        `}
                </style>
            </Box>
        </Container>
    )
}

export default ClassesList
