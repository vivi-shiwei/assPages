import React from 'react'
import { Formik, Field, Form } from 'formik'


import {
    Select,
    Button,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormErrorMessage,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Box,
    useToast
} from '@chakra-ui/core'
import ToastMessage from '../../components/common/toastMessage'

const DashboardsSelector = ({ schoolId, schoolDashboardId }) => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialValues = {
        name: ''
    }
    function validateName(val) {
        return (!val) ? '該選項不可為空！' : ((val.length < 3) ? '長度不可短於三個字符！' : '')
    }

    const school = { currentSchooluser: { isAdmin: true } }
    const schoolDashboards = [
        { name: '2019-2020', isDefault: true },
        { name: '2020-2021', isDefault: false },
        { name: '2018-2029', isDefault: false }
    ]
    return (
        <>
            <Box display='flex' justifyContent='center' m='auto'>
                <Button onClick={onOpen} variantColor='blue'>新增</Button>

                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>新增 Dashboard</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, { setSubmitting }) => {
                                    const { name } = values
                                    const input = {
                                        name,
                                        schoolId
                                    }
                                    ToastMessage({
                                        message: error.message,
                                        title: '新增Dashboard錯誤',
                                        toast
                                    })
                                }}
                            >
                                {props => (
                                    <Form onSubmit={props.handleSubmit}>
                                        <Field name='name' validate={validateName}>
                                            {({ field, form }) => (
                                                <FormControl mt={4} isInvalid={form.errors.name && form.touched.name}>
                                                    <FormLabel htmlFor='dashboard-name'>Dashboard 名稱</FormLabel>
                                                    <Input id='dashboard-name' {...field} />
                                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Box textAlign='center'>
                                            <Button
                                                mr={3}
                                                mt={8}
                                                variantColor='blue'
                                                isLoading={props.isSubmitting}
                                                type='submit'
                                                minW={{ base: '100%', sm: '200px', md: '200px' }}
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
                <Select maxW='400px' mx={4}>
                    {schoolDashboards.map(dashboard => {
                        if (dashboard.isDefault) {
                            return (
                                <option >
                                    {dashboard.name}(現在)
                                </option>
                            )
                        } else {
                            return (
                                <option > {dashboard.name} </option>
                            )
                        }
                    })}
                </Select>
                {
                    school.currentSchooluser.isAdmin && (
                        <IconButton
                            icon='edit'
                            variantColor='blue'
                            onClick={() => router.push(
                                '/school'
                            )}
                        />
                    )
                }
            </Box>
        </>
    )
}

export default DashboardsSelector
