import React from 'react'
import {
    ThemeProvider,
    CSSReset,
    theme,
    Box,
    Image,
    Text,
    Link,
    AspectRatioBox,
    Divider,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Flex,
    Stack,
    InputGroup,
    Input,
    InputLeftElement,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ButtonGroup,
    Textarea,
    Radio,
    RadioGroup,
    Checkbox,
    Heading,
    PseudoBox,
    IconButton,
    Select,
    Alert,
    AlertIcon
} from '@chakra-ui/core'

import { IoIosImage, IoIosPerson, IoIosPeople, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSmile } from "react-icons/fi";


import Fieldset from '../../components/common/fieldset'
import SchoolCard from './schoolCard'
import ClassesList from './classesList'
import CourseList from './courseList'
import App from "../../App"
import { SchoolPage } from "../../components/layout"
import Container from "../../components/container"
import DashboardsSelector from './dashboardsSelector'

const Onelayout = props => {
    return (
        <Box
            width={{ base: '100%', sm: '500px', md: '555px' }}
            bg="blue.50"
            mx='auto'
            borderRadius='4px'
            {...props} />
    )
}

const schoolDashboard = {
    isDefault: true
}
const school = {
    name: '聖若瑟教區中學第一校'
}
const classes = () => {
    return (
        <SchoolPage>
            <Box mt={16} py={4}>
                <Container>
                    <Box pb={4}>
                        <DashboardsSelector />
                    </Box>
                </Container>
            </Box>
            {
                schoolDashboard.isDefault ? (
                    <Container pb={4}>
                        <Fieldset title={school.name} background='#ebf8ff' />
                        <Box as='section' textAlign='center'>
                            <SchoolCard
                                title='學生評估'
                                href='/school'
                            />

                            <SchoolCard
                                title='相簿'
                                href='/school/'
                            />

                            <SchoolCard
                                title='九大智能分析'
                                href='/school/'
                            />
                        </Box>
                    </Container>
                ) : (
                        <Alert status='warning' w='60%' textAlign='center' justifyContent='center' mx='auto'>
                            <AlertIcon />
                            該學年不是當前學年!
                        </Alert>
                    )
            }

            <ClassesList
            />

            <CourseList
                type='elective'
                modalTitle='編輯選修課'
                fieldTitle='選修課'
            />

            <CourseList
                type='activity'
                modalTitle='編輯興趣課'
                fieldTitle='興趣課'
            />
            {/* <Container pb={4}>
                <Fieldset title='聖若瑟教區中學第一校' background='#ebf8ff' wid={['0', '90px', '130px', '350px']} />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='學生評估'
                        href='#'
                    />

                    <SchoolCard
                        title='相簿'
                        href='#'
                    />
                </Box>
            </Container>

            <Container pb={4}>
                <Fieldset title='班級' background='#ebf8ff' wid={['0', '90px', '130px', '300px']} />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='初甲'
                        href='#'
                    />
                    <SchoolCard
                        title='初乙'
                        href='#'
                    />
                    <SchoolCard
                        title='初丙'
                        href='#'
                    />
                    <SchoolCard
                        title='甲班'
                        href='#'
                    />
                    <SchoolCard
                        title='乙班'
                        href='#'
                    />
                    <SchoolCard
                        title='丙班'
                        href='#'
                    />
                    <SchoolCard
                        title='幼兒'
                        href='#'
                    />
                    <SchoolCard
                        title='大班'
                        href='#'
                    />
                    <SchoolCard
                        title='小班'
                        href='#'
                    />
                </Box>
            </Container>

            <Container pb={4}>
                <Fieldset
                    title='選修課'
                    background='#ebf8ff'
                    wid={['0', '90px', '130px', "300px"]}
                />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='歷史'
                        href='#'
                    />

                    <SchoolCard
                        title='科學'
                        href='#'
                    />

                    <SchoolCard
                        title='法制'
                        href='#'
                    />
                </Box>
            </Container>
            <Container>
                <Fieldset
                    title='興趣課'
                    background='#ebf8ff'
                    wid={['0', '90px', '130px', "300px"]}
                />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='舞蹈'
                        href='#'
                    />

                    <SchoolCard
                        title='武術'
                        href='#'
                    />

                    <SchoolCard
                        title='跆拳道'
                        href='#'
                    />
                </Box>
            </Container>

            <Container pb={4}>
                <Fieldset title='聖若瑟教區中學第一校' background='#ebf8ff' wid={['0', '90px', '130px', '350px']} />
                <Box as='section' textAlign='center'>
                    <SchoolCard
                        title='學生評估'
                        href='#'
                    />

                    <SchoolCard
                        title='相簿'
                        href='#'
                    />

                    <SchoolCard
                        title='九大智能分析'
                        href='#'
                    />
                </Box>
            </Container> */}
        </SchoolPage >
    )
}

export default { title: 'Class' };

export const Cls = () => { return App(classes) };