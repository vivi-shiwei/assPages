import React from 'react';
import { Formik, Field, Form } from 'formik'

import NewBgLayout, { NewInputHeader } from '../../components/common/newBgLayout'
import App from '../../App'
import LinkNext from 'next/link'
import DeleteAlert from '../../components/common/deleteAlert'

import {
    Box,
    FormLabel,
    Button,
    FormControl,
    Input,
    FormErrorMessage,
    Divider,
    useToast,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/core'


const initialValues = {
    name: '聖若瑟教區中學第一校', // 學校名字
    englishName: 'elsdij', // 学校英文名
    slug: 'dhfu-3' // 學校代号
}
const validateName = (value) => {
    return (!value) ? '該選項不可為空！' : ((value.length < 3) ? '長度不可短於三個字符！' : '')
}
const validateSlug = (value) => {
    return (!value) ? '該選項不可為空！' : ''
}
const EditSchool = () => {
    const toast = useToast();
    return (
        <NewBgLayout
            backurl={[
                {
                    href: '/school',
                    name: '首頁'
                },
                {
                    href: '/school',
                    name: '管理員'
                }
            ]}
        >
            <NewInputHeader
                title='編輯學校'
                schoolname='聖若瑟教區中學第一校'
            />
            <Divider my={6} d={{ base: 'none', md: 'flex' }} />
            <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        const { name, englishName, slug } = values
                        const input = {
                            name,
                            englishName,
                            slug
                        }
                        toast({
                            title: name,
                            description: englishName,
                            status: "success",
                            duration: 3000,
                            isClosable: true,
                        })
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({ field, form: { errors, touched } }) => (
                                    <FormControl mt={4} isInvalid={errors.name && touched.name}>
                                        <FormLabel>學校名稱</FormLabel>
                                        <Input {...field} />
                                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='englishName'>
                                {({ field, form }) => (
                                    <FormControl mt={4}>
                                        <FormLabel htmlFor='school-englishName'>學校英文名</FormLabel>
                                        <Input id='school-englishName' {...field} />
                                    </FormControl>
                                )}
                            </Field>
                            <Field name='slug' validate={validateSlug}>
                                {({ field, form: { errors, touched } }) => (
                                    <FormControl mt={4} isInvalid={errors.slug && touched.slug}>
                                        <FormLabel>學校代号</FormLabel>
                                        <Input {...field} />
                                        <FormErrorMessage>{errors.slug}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Box
                                display='flex'
                                flexDirection='column'
                                flexWrap='wrap-reverse'
                            >
                                <Button
                                    variantColor='blue'
                                    type='submit'
                                    borderRadius={{ base: '99px', sm: '0' }}
                                    w={{ base: '90px', sm: '200px' }}
                                    // minW= '200px' 
                                    mr={3}
                                    mt={8}
                                    mb={8}
                                >
                                    修改
                                </Button>
                                <Alert status="warning">
                                    <AlertIcon />
                                    删除后全部学校数据都会被删除，是否删除!
                                </Alert>
                                <DeleteAlert
                                    title='刪除提示'
                                    content={`是否確定删除學校`}
                                    toastTitle='删除學校錯誤'
                                    backurl={{
                                        href: '/school'
                                    }}
                                >
                                    <Button
                                        variantColor='red'
                                        minW='100%'
                                        borderRadius={{ base: '99px', sm: '0' }}
                                        mr={3}
                                    >
                                        刪除
                                    </Button>
                                </DeleteAlert>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </NewBgLayout>
    )
}

export default { title: 'EditSchoolPage' };

export const EditSchoolPages = () => (
    App(EditSchool)
)