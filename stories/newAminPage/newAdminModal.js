import { Formik, Form, Field } from 'formik'
import React, { useState } from 'react'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    Input,
    FormLabel,
    Radio,
    RadioGroup,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useToast
} from '@chakra-ui/core'

import UserImage from '../../components/common/userImage'
// import ToastMessage from '../..components/common/toastMessage'

// 檢查 email 格式
const validateEmail = (value) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (!re.test(String(value).toLowerCase())) ? 'email 格式錯誤' : ''
}

const validateEmpty = (value) => {
    return (!value.length) ? '該項不可為空' : ''
}

const NewAdminModal = (props) => {
    const toast = useToast()
    const [userImage, setUserImage] = useState(null)

    const [lastFileKey, setLastFileKey] = useState(null)


    return (
        <Modal
            onClose={props.onModalClose}
            finalFocusRef={props.btnModalRef}
            isOpen={props.isModalOpen}
            scrollBehavior='inside'
            blockScrollOnMount={false}
            closeOnOverlayClick={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {props.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody position='relative'>
                    <Formik
                        initialValues={props.initialValues}
                        onSubmit={(values, { setSubmitting, setFieldError }) => {
                            console.log(props)
                        }}
                    >
                        {({ isSubmitting, values, setFieldValue }) => (
                            <Form>
                                <Box
                                    as='main'
                                    position='absolute'
                                    top='0px'
                                    bottom='0px'
                                    left='0px'
                                    right='0px'
                                    display='flex'
                                    overflow='hidden'
                                    flexDirection='column'
                                >
                                    <Box
                                        as='article'
                                        flex='1'
                                        overflowY='auto'
                                        px={10}
                                    >
                                        <UserImage
                                            userImage={userImage}
                                            imageURL={props.imageURL}
                                        />
                                        <Field name='name' validate={validateEmpty}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.name && touched.name}>
                                                    <FormLabel htmlFor='user-name'>姓名</FormLabel>
                                                    <Input id='user-name' {...field} />
                                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field name='englishName' validate={validateEmpty}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.englishName && touched.englishName}>
                                                    <FormLabel htmlFor='user-en-name'>英文姓名</FormLabel>
                                                    <Input id='user-en-name' placeholder='English Name' {...field} />
                                                    <FormErrorMessage>{errors.englishName}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='gender'>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <RadioGroup mt={4} spacing={5} isInline {...field}>
                                                    <Radio key='male' variantColor='green' value='M'>
                                                        男
                          </Radio>
                                                    <Radio key='female' variantColor='red' value='F'>
                                                        女
                          </Radio>
                                                </RadioGroup>
                                            )}
                                        </Field>
                                        {
                                            (props.type === 'student') && (
                                                <Field name='studentNo' validate={validateEmpty}>
                                                    {({ field, form: { touched, errors }, meta }) => (
                                                        <FormControl mt={4} isInvalid={errors.studentNo && touched.studentNo}>
                                                            <FormLabel>學號</FormLabel>
                                                            <Input placeholder='學號' {...field} />
                                                            <FormErrorMessage>{errors.studentNo}</FormErrorMessage>
                                                        </FormControl>
                                                    )}
                                                </Field>
                                            )
                                        }
                                        <Field name='idNo' validate={validateEmpty}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.idNo && touched.idNo}>
                                                    <FormLabel>身份證號碼</FormLabel>
                                                    <Input placeholder='身份證號碼' {...field} />
                                                    <FormErrorMessage>{errors.idNo}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='eduNo' validate={validateEmpty}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.eduNo && touched.eduNo}>
                                                    <FormLabel>教青局教師證/教青局學生證編號</FormLabel>
                                                    <Input placeholder='教青局教師證/教青局學生證編號' {...field} />
                                                    <FormErrorMessage>{errors.eduNo}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='cardNo' validate={validateEmpty}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.cardNo && touched.cardNo}>
                                                    <FormLabel>拍卡卡號</FormLabel>
                                                    <Input placeholder='拍卡卡號' {...field} />
                                                    <FormErrorMessage>{errors.cardNo}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>

                                        <Field name='email' validate={validateEmail}>
                                            {({ field, form: { touched, errors }, meta }) => (
                                                <FormControl mt={4} isInvalid={errors.email && touched.email}>
                                                    <FormLabel>電郵信箱</FormLabel>
                                                    <Input placeholder='在這輸入用戶的電郵信箱' {...field} />
                                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                    </Box>
                                    <Box
                                        as='div'
                                        display='flex'
                                        justifyContent='flex-end'
                                        alignItems='center'
                                        mt={3}
                                        px={3}
                                        pb={3}
                                    >
                                        <Button
                                            variant='ghost'
                                            minW={100}
                                            mr={3}
                                            onClick={props.onModalClose}
                                        >
                                            关 闭
                    </Button>
                                        <Button
                                            variantColor='blue'
                                            minW={100}
                                            mr={3}
                                            type='submit'
                                            isLoading={isSubmitting}
                                        >
                                            保 存
                    </Button>
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default NewAdminModal
