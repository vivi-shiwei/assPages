import React, { useState } from 'react';
import {
    Box,
    Heading,
    Divider,
    Button,
    Image,
    Flex,
    SimpleGrid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    AspectRatioBox
} from '@chakra-ui/core'

import Layout from '../conponents/layout'
import Container from '../conponents/container'
import App from '../App'

import MyImage from "../static/QQ20200518181405.jpg"
import MyImage3 from "../static/timg8J2T10BJ.jpg"
import MyImage4 from "../static/timgXOPS3YTR.jpg"
import MyImage6 from "../static/timg.jpg"

const photot = () => {
    const [isImageView, setImageView] = useState('')
    const { isOpen: imageisOpen, onOpen: imageonOpen, onClose: imageonClose } = useDisclosure();
    const photos = [
        { profilePhoto: MyImage },
        { profilePhoto: MyImage3 },
        { profilePhoto: MyImage4 },
        { profilePhoto: MyImage6 },
        { profilePhoto: MyImage },
        { profilePhoto: MyImage3 },
        { profilePhoto: MyImage4 },
        { profilePhoto: MyImage6 }
    ];
    const handleSizeClick = (newphotos) => {
        setImageView(newphotos);
        imageonOpen();
    };
    return (
        <Layout>
            <Box mt={16} py={4}>
                <Container>
                    <Heading textAlign='center' mb={10}>
                        聖若瑟教區中學第一校的相簿
                    </Heading>

                    <Flex minxW='879px' mx='auto' wrap='wrap' justifyContent='center'>
                        {photos.map(photo => (
                            <Box mb='8px'>
                                <AspectRatioBox ratio={4 / 3} m="1px"  w={{base:'400px',sm:'213px',md:'205px'}}>
                                    <Image
                                        w='100%'
                                        h='100%' src={photo.profilePhoto} alt="naruto" objectFit="cover" cursor='pointer' onClick={()=>handleSizeClick(photo.profilePhoto)} />
                                </AspectRatioBox>
                            </Box>
                        ))}
                    </Flex>

                    <Box m={10} textAlign='center'>
                        <Button
                            variantColor='blue'
                        >
                            顯示更多的貼文
              </Button>
                    </Box>
                </Container>
            </Box>

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
                                <Image src={isImageView} alt="naruto" objectFit="cover" cursor='pointer' />
                            </AspectRatioBox>
                        </Flex>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Layout>
    )
}

export default { title: 'Photo' };

export const Photose = () => App(photot);