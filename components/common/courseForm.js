import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select
} from '@chakra-ui/core'

import DeleteAlert from './deleteAlert'

const validateName = (value) => {
    return (!value) ? '該選項不可為空！' : ''
}

const CourseForm = (props) => {
    const creditsList = []
    const termList = []

    return (
        <Formik
            initialValues={props.initialValues}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
                alert('修改失敗')
            }}
        >
            {({ isSubmitting, values, setFieldValue }) => (
                <Form>
                    <Field name='name' validate={validateName}>
                        {({ field, form: { touched, errors }, meta }) => (
                            <FormControl mt={4} isInvalid={errors.name && touched.name}>
                                <FormLabel htmlFor='course-name'>課程名稱</FormLabel>
                                <Input id='course-name' {...field} />
                                <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name='englishName'>
                        {({ field, form: { touched, errors }, meta }) => (
                            <FormControl mt={4}>
                                <FormLabel htmlFor='english-name'>課程英文名稱</FormLabel>
                                <Input id='english-name' {...field} />
                            </FormControl>
                        )}
                    </Field>
                    <Field name='slug' validate={validateName}>
                        {({ field, form: { touched, errors }, meta }) => (
                            <FormControl mt={4} isInvalid={errors.slug && touched.slug}>
                                <FormLabel htmlFor='slug'>課程編碼</FormLabel>
                                <Input id='slug' {...field} />
                                <FormErrorMessage>{errors.slug}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>

                    {/* <Field name='type' validate={validateType}>
            {({ field, form: { touched, errors }, meta }) => (
              <FormControl mt={4}>
                <FormLabel>課程類型</FormLabel>
                <RadioGroup spacing={5} isInline {...field}>
                  <Radio variantColor='blue' value='required'>
                    必修
                  </Radio>
                  <Radio variantColor='blue' value='elective'>
                    選修
                  </Radio>
                  <Radio variantColor='blue' value='activity'>
                    興趣班
                  </Radio>
                </RadioGroup>
              </FormControl>
            )}
          </Field> */}

                    {/* <Field name='clsId'>
            {({ field, form, meta }) => (
              <FormControl mt={4} d={showCls ? '' : 'none'}>
                <FormLabel htmlFor='cls-id'>班級</FormLabel>
                <Select id='cls-id' defaultValue={props.defaultClsId} onChange={values => { setFieldValue('clsId', values.target.value) }}>
                  {props.children}
                </Select>
              </FormControl>
            )}
          </Field> */}

                    {
                        (props.initialValues.type === 'elective' || props.initialValues.type === 'required') ? (
                            <Field name='credits'>
                                {({ field, form: { touched, errors }, meta }) => (
                                    <FormControl mt={4}>
                                        <FormLabel htmlFor='number-of-course-credits'> 課程單位數</FormLabel>
                                        <Select id='credits' defaultValue={props.initialValues.credits || 0} onChange={values => { setFieldValue('credits', values.target.value) }}>
                                            {
                                                creditsList.map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                )}
                            </Field>
                        ) : ''
                    }

                    <Field name='term'>
                        {({ field, form: { touched, errors }, meta }) => (
                            <FormControl mt={4}>
                                <FormLabel htmlFor='number-of-semester'>課程學期數</FormLabel>
                                <Select id='number-of-semester' defaultValue={props.initialValues.term || 0} onChange={values => { setFieldValue('term', values.target.value) }}>
                                    {
                                        termList.map((item, index) => (
                                            <option key={index} value={item}>{(item === 0 ? '全年' : item)}</option>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        )}
                    </Field>
                    <Box
                        display={{ base: 'block', sm: 'block', md: 'flex' }}
                        justifyContent={(props.type !== 'add' ? 'space-between' : 'center')}
                    >
                        <Button
                            variantColor='blue'
                            minW={{ base: '100%', sm: '100%', md: '200px' }}
                            mr={3}
                            mt={8}
                            type='submit'
                            isLoading={isSubmitting}
                        >
                            {(props.type === 'add') ? '保存' : '完成編輯'}
                        </Button>
                        {
                            (props.type !== 'add') ? (
                                <>
                                    <DeleteAlert
                                        title='刪除提示'
                                        toastTitle='刪除课程錯誤'
                                    >
                                        <Button
                                            variantColor='red'
                                            minW={{ base: '100%', sm: '100%', md: '200px' }}
                                            mr={3}
                                            mt={8}
                                        >
                                            删除
                                        </Button>
                                    </DeleteAlert>
                                </>
                            ) : ''
                        }
                    </Box>
                </Form>
            )}
        </Formik>
    )
}

const OptionItem = (props) => {
    return (
        <option value={props.id}>
            {props.name}
        </option>
    )
}
export { OptionItem }
export default CourseForm
