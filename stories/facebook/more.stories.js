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
    PseudoBox
} from '@chakra-ui/core'

import { IoIosImage, IoIosPerson, IoIosPeople, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiSmile } from "react-icons/fi";

import Container from "./container"
import Tworlayout from "./twolayout"
import MyImage from "../../static/QQ20200518181405.jpg"
import MyImage1 from "../../static/QQ20200518181405.jpg"
import MyImage2 from "../../static/timg.jpg"
import MyImage3 from "../../static/timg8J2T10BJ.jpg"
import MyImage4 from "../../static/timgXOPS3YTR.jpg"
import MyImage5 from "../../static/QQ20200518181405.jpg"
import MyImage6 from "../../static/timg.jpg"
import MyImage7 from "../../static/timg8J2T10BJ.jpg"
import MyImage8 from "../../static/timgXOPS3YTR.jpg"
import App from "../../App"
import Layout from "./layout"
import Menus from "./menu"

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


const more = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: imageisOpen, onOpen: imageonOpen, onClose: imageonClose } = useDisclosure();
    const [size, setSize] = React.useState("md");
    const [num, setnum] = React.useState(1);
    const [number, setnumber] = React.useState(1);
    let [value, setValue] = React.useState("");
    let [value1, setValue1] = React.useState("");

    const handleSizeClick = (newSize, newnum, val, val1) => {
        setSize(newSize);
        setnum(newnum)
        setValue(val)
        setValue1(val1)
        imageonOpen();
    };
    var My
    const imageclick = props => {
        if (props === 'left' && num !== 0 && num !== 9) {
            My = "MyImage" + num
            setSize(My);
            console.log(size)
            num++
        } else if (props === 'right' && num !== 0 && num !== 9) {
            My = "MyImage" + num
            setSize(My);
            console.log(size)
            num--
        }
        if (num === 0) {
            num = 8
            My = "MyImage" + num
            setSize(My);
            console.log(size)
        }
        if (num === 9) {
            num = 1
            My = "MyImage" + num
            setSize(My);
            console.log(size)
        }

    }
    return (
        <Layout>
            <Heading textAlign='center' >聖若瑟教區中學第一校</Heading>
            <Onelayout
                pt={{ base: '20px', sm: '20px' }}>
                <Tworlayout>
                    <Container lineHeight='35px' mt='0'
                        backgroundColor="blue.50" opacity={0.6}
                    >
                        <Text ml={2} alignItems='center' mt={{ base: '-11px', sm: '-12px' }}>建立貼文</Text>
                        <Divider borderColor='blackAlpha.300' />
                    </Container>
                    <Flex mb="30px">
                        <Image
                            src={MyImage}
                            rounded="full"
                            size="50px" />
                        <Box my="auto" w='100%'>
                            <Textarea
                                type="phone"
                                placeholder="vivi，你想些什麽？"
                                border="none"
                                size="sm"
                                resize='none'
                                overflowX='hidden'
                                overflowY='hidden'
                                _focus={{
                                    outline: 'none',
                                    bg: 'white'
                                }} onClick={onOpen} />
                        </Box>
                        <Modal isOpen={isOpen} onClose={onClose} size={{ base: '100%', sm: '500px', md: '555px' }}>
                            <ModalOverlay />
                            <ModalContent
                                borderRadius='5px' mt={{ base: '165px', sm: '180px' }}>
                                <Tworlayout>
                                    <Container lineHeight='35px'
                                        backgroundColor="blue.50" opacity={0.5}>
                                        <Text ml={2} alignItems='center' mt={{ base: '-20px', sm: '-26px' }}>建立貼文</Text>
                                        <ModalCloseButton
                                            _focus={{
                                                outline: 'none',
                                                backgroundColor: "blue.50", opacity: 0.5
                                            }} />
                                        <Divider borderColor='blackAlpha.300' />
                                    </Container>
                                    <Flex mb="30px" H>
                                        <Image
                                            src={MyImage}
                                            rounded="full"
                                            size="50px" />
                                        <Box my="auto" w="100%" h>
                                            <Textarea
                                                type="phone"
                                                placeholder="vivi，你想些什麽？"
                                                border="none"
                                                resize='none'
                                                overflowX='hidden'
                                                overflowY='hidden'
                                                _focus={{
                                                    outline: 'none',
                                                    bg: 'white'
                                                }} onClick={onOpen} />
                                        </Box>
                                    </Flex>
                                    <Divider borderColor='blackAlpha.300' />
                                    <ButtonGroup>
                                        <Button leftIcon={IoIosImage} borderRadius='99px' width={{ base: '95px', sm: '150px' }}>
                                            <Breadcrumb fontSize={10}>
                                                <Text>圖片 / 影片</Text>
                                            </Breadcrumb>
                                        </Button>
                                        <Button leftIcon={IoIosPerson} borderRadius='99px' width={{ base: '80px', sm: '120px' }}>
                                            <BreadcrumbItem fontSize={10}>
                                                <Text>標注朋友</Text>
                                            </BreadcrumbItem>
                                        </Button>
                                        <Button leftIcon={FiSmile} borderRadius='99px' width={{ base: '95px', sm: '150px' }}>
                                            <Breadcrumb fontSize={10}>
                                                <BreadcrumbItem>
                                                    <Text>感受 / 生活</Text>
                                                </BreadcrumbItem>
                                            </Breadcrumb>
                                        </Button>
                                    </ButtonGroup>
                                    <Container>
                                        <Divider borderColor='blackAlpha.300' />
                                        <Flex direction="column" mx={4}>
                                            <Flex justify="space-between" mb={{ base: '2px', sm: '3px' }}>
                                                <Checkbox defaultIsChecked>動態消息</Checkbox>
                                                <Flex>
                                                    <Menu>
                                                        <MenuButton as={Button} leftIcon={IoIosPeople} rightIcon="chevron-down">
                                                            <Text fontSize={10}>
                                                                朋友
                                                                    </Text>
                                                        </MenuButton>
                                                        <MenuList fontSize={10}>
                                                            <MenuItem>公開</MenuItem>
                                                            <MenuItem>朋友</MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </Flex>
                                            </Flex>
                                            <Flex justify="space-between">
                                                <Checkbox>限時動態</Checkbox>
                                                <Flex>
                                                    <Button as={Button} leftIcon={IoIosPeople} rightIcon="chevron-down">
                                                        <Text fontSize={10}>
                                                            朋友
                                                            </Text>
                                                    </Button>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Container>
                                </Tworlayout>
                            </ModalContent>
                        </Modal>
                    </Flex>
                    <Divider borderColor='blackAlpha.300' />
                    <ButtonGroup mx="auto">
                        <Button leftIcon={IoIosImage} borderRadius='99px' width={{ base: '95px', sm: '150px' }}>
                            <Breadcrumb fontSize={10}>
                                <Text>圖片 / 影片</Text>
                            </Breadcrumb>
                        </Button>
                        <Button leftIcon={IoIosPerson} borderRadius='99px' width={{ base: '80px', sm: '120px' }}>
                            <BreadcrumbItem fontSize={10}>
                                <Text>標注朋友</Text>
                            </BreadcrumbItem>
                        </Button>
                        <Button leftIcon={FiSmile} borderRadius='99px' width={{ base: '95px', sm: '150px' }}>
                            <Breadcrumb fontSize={10}>
                                <Text>感受 / 生活</Text>
                            </Breadcrumb>
                        </Button>
                    </ButtonGroup>
                </Tworlayout>


                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#">
                                vivi
                            </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                            </Link>
                        </Box>
                        <Box color="blue.500" cursor='pointer'>
                            #
                            <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                            </Link>
                        </Box>
                    </Text>
                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box color="blue.500" cursor='pointer'>
                            #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>{' '}
                        #
                        <Link href="https://www.facebook.com/hashtag/%E7%AD%B7%E5%AD%90%E5%9F%BA%E5%85%84%E5%BC%9F?source=feed_text&epa=HASHTAG">
                                筷子基兄弟
                    </Link>
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>


                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Flex my='auto' fontSize="19px">
                                    <Link color="blue.500" href="#">
                                        vivi
                                </Link><Text>——和</Text>
                                    <Link color="blue.500" href="#">
                                        小芳
                                </Link><Text>其三个人</Text>
                                    <Text>。</Text>
                                </Flex>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            美丽的小芳和帅气的小明热恋了，另外一个人小军把小芳抢走了
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Flex my='auto' fontSize="19px">
                                    <Link color="blue.500" href="#">
                                        vivi
                                    </Link>
                                    <Text>——和</Text>
                                    <Link color="blue.500" href="#">
                                        小芳
                                    </Link>
                                    <Text>。</Text>
                                </Flex>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            美丽的小芳
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">
                        <Box>
                            <Link color="blue.500" href="#">
                                vivi
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>{' '}
                            <Link color="blue.500" href="#">
                                Jp Srib
                        </Link>
                        </Box>
                    </Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>
                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣真好</Text>
                    {/* <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    ></Text> */}
                    <Container mt={3}>
                        <Flex justify='flex-start' >
                            <Flex direction='column'>
                                <AspectRatioBox width={{ base: '220px', sm: '234px', md: '275px' }} height={{ base: '210px', sm: '230px', md: '249px' }} ratio={4 / 2} m="1px" >
                                    <Image src={MyImage1} alt="naruto" objectFit="cover" cursor='pointer' onClick={() => { handleSizeClick(MyImage1, 1, '今天天氣真好', 'vivi') }} />
                                </AspectRatioBox>
                                <AspectRatioBox width={{ base: '220px', sm: '234px', md: '275px' }} height={{ base: '210px', sm: '230px', md: '249px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, 2, '今天天氣真好', 'vivi')} />
                                </AspectRatioBox>
                            </Flex>
                            <Flex direction='column'>
                                <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '139px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3, 3, '今天天氣真好', 'vivi')} />
                                </AspectRatioBox>
                                <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '139px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                    <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4, 4, '今天天氣真好', 'vivi')} />
                                </AspectRatioBox>
                                <Box pos='relative'>
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '153px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage5} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage5, 5, '今天天氣真好', 'vivi')} />
                                    </AspectRatioBox>
                                    <Box pos='absolute' left='0' bottom='0' right='0' top='0' bg='rgba(0, 0, 0, .4)' width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '153px', md: '166px' }}>
                                        <Box m='auto' display='table' h='100%' w='100%' onClick={() => handleSizeClick(MyImage5, 5, '今天天氣真好', 'vivi')}>
                                            <Box display='table-cell' textAlign='center' verticalAlign='middle' color='white' fontSize={20}>
                                                还有三张
                                        </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box display="none">
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage6} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage6, 6, '今天天氣真好', 'vivi')} />
                                    </AspectRatioBox>
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage7} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage7, 7, '今天天氣真好', 'vivi')} />
                                    </AspectRatioBox>
                                    <AspectRatioBox width={{ base: '221px', sm: '234px', md: '275px' }} height={{ base: '140px', sm: '152px', md: '166px' }} ratio={4 / 2} m="1px">
                                        <Image src={MyImage8} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage8, 8, '今天天氣真好', 'vivi')} />
                                    </AspectRatioBox>
                                </Box>
                            </Flex>
                        </Flex>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                        </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={3}
                        fontSize={{ base: 20, sm: 26 }}
                        textTransform="uppercase"
                        letterSpacing="wide">今天天氣真好</Text>

                    {/* <Divider mb={39} borderColor='blackAlpha.500' /> */}
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Container mt={3}>
                        <AspectRatioBox maxW="100%" ratio={4 / 2}>
                            <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, (-1), ' ', 'vivi')} />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Container mt={3}>
                        <AspectRatioBox maxW="full" ratio={4 / 2.3}>
                            <Box
                                as="iframe"
                                title="naruto"
                                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                                allowFullScreen
                            />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>


                <Modal
                    onClose={imageonClose}
                    isOpen={imageisOpen}
                    isCentered
                    size={{ base: "500px", sm: "700px", md: "1000px" }}
                    bg="none"
                    border="none"
                    p="0" >
                    <ModalOverlay />
                    <ModalContent bg="none" border="none" p="0">
                        <ModalBody p="0" bg="none" border="none">
                            <Flex justify={{ base: 'none', sm: 'space-between' }}>
                                <AspectRatioBox ratio={4 / 2}
                                    w={{ base: "600px", sm: "700px", md: "1000px" }}>
                                    <Image src={size} alt="naruto" objectFit="cover" cursor='pointer' />
                                </AspectRatioBox>
                                <Box bg='white' width={{ base: "300px", sm: "400px" }} height={{ base: "200px", sm: "230px", md: '500px' }}>
                                    <Box m={{ base: 1, sm: 3 }} p={0}>
                                        <Flex justify='space-between' m={0} p={0}>
                                            <Flex>
                                                <Image
                                                    my="auto"
                                                    src={MyImage}
                                                    rounded="full"
                                                    size={["30px", "30px", "40px", "50px"]}
                                                />
                                                < Box ml={4} p={0} >
                                                    <Link color="blue.500" href="#" fontSize="10px">
                                                        {value1}
                                                    </Link>
                                                    <Text fontSize={{ base: "6px", sm: "13px" }} color="gray.500">49分鐘</Text>
                                                </Box>
                                            </Flex>
                                            <Menus />
                                        </Flex>
                                        <Text
                                            my={2}
                                            fontSize={16}
                                            textTransform="uppercase"
                                            letterSpacing="wide"
                                            mt='20px'
                                        >{value}</Text>
                                    </Box>
                                </Box>
                            </Flex>
                            {/* {(num=== -1 )?
                            (<AspectRatioBox ratio={4 / 2}
                                w={{ base: "400px", sm: "500px", md: "700px" }}>
                                <Image src={size} alt="naruto" objectFit="cover" cursor='pointer' />
                            </AspectRatioBox>) : (<Box display='flex' justify='space-between' bg='none' p="none">
                            <Button rightIcon={IoIosArrowBack} fontSize={30} my='auto' h='285px' bg='transparent' p="0" border="0"
                             onClick={() => imageclick('right')}
                                _focus={{
                                    outline: 'none'
                                }}
                                ></Button>
                            <AspectRatioBox ratio={4 / 2}
                                w={{ base: "400px", sm: "500px", md: "700px" }}>
                                <Image src={size} alt="naruto" objectFit="cover" cursor='pointer' />
                            </AspectRatioBox>
                            <PseudoBox leftIcon={IoIosArrowForward} fontSize={30} my='auto'  h='285px' bg='transparent' border="0" p="0"
  as="button"
                             onClick={() => imageclick('left')}
                                _focus={{
                                    outline: 'none'
                                }}></PseudoBox>
                            </Box>)} */}

                        </ModalBody>
                    </ModalContent>
                </Modal>


                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                            </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>
                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣不好</Text>

                    <Container mt={3}>
                        <AspectRatioBox maxW="100%" ratio={4 / 2}>
                            <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, (-1), '今天天氣不好', 'vivi')} />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣真好</Text>

                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 2} mb="1px">
                            <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, 2, '今天天氣真好', 'vivi')} />
                        </AspectRatioBox>
                        <AspectRatioBox ratio={4 / 2}>
                            <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3, 3, '今天天氣真好', 'vivi')} />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣不好</Text>
                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 3} mb="1px">
                            <Image src={MyImage1} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage, 1, '今天天氣不好', 'vivi')} />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }} >
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, 2, '今天天氣不好', 'vivi')} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3, 3, '今天天氣不好', 'vivi')} />
                            </AspectRatioBox>
                        </Box>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣不好</Text>

                    <Container mt={3}>
                        <AspectRatioBox ratio={4 / 3} mb="1px">
                            <Image src={MyImage} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage, 1, '今天天氣不好', 'vivi')} />
                        </AspectRatioBox>
                        <Box display="flex" h={{ base: '100px', sm: '150px' }}>
                            <AspectRatioBox width="50%" ratio={4 / 2} mr="1px">
                                <Image src={MyImage2} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage2, 2, '今天天氣不好', 'vivi')} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2}>
                                <Image src={MyImage3} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage3, 3, '今天天氣不好', 'vivi')} />
                            </AspectRatioBox>
                            <AspectRatioBox width="50%" ratio={4 / 2} ml="1px">
                                <Image src={MyImage4} alt="naruto" objectFit="cover" onClick={() => handleSizeClick(MyImage4, 4, '今天天氣不好', 'vivi')} />
                            </AspectRatioBox>
                        </Box>
                    </Container>
                </Tworlayout>

                <Tworlayout>
                    <Flex w='100%' justify='space-between' m={0} p={0}>
                        <Flex>
                            <Image
                                my="auto"
                                src={MyImage}
                                rounded="full"
                                size="50px" />
                            <Box ml={4} p={0}>
                                <Link color="blue.500" href="#" fontSize="19px">
                                    vivi
                                </Link>
                                <Text fontSize="13px" color="gray.500">49分鐘</Text>
                            </Box>
                        </Flex>
                        <Menus />
                    </Flex>

                    <Text
                        my={2}
                        fontSize={16}
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >今天天氣真好,該配合你演出的我，也視而不見，別逼一個最愛的人演出細節</Text>

                    <Container mt={3}>
                        <AspectRatioBox maxW="full" ratio={4 / 2.3}>
                            <Box
                                as="iframe"
                                title="naruto"
                                src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                                allowFullScreen
                            />
                        </AspectRatioBox>
                    </Container>
                </Tworlayout>
            </Onelayout>
        </Layout >
    )
}

export default { title: 'themore' };

export const mores = () => { return App(more) };