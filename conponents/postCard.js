import React from 'react';
import {
    Box,
    Tag,
    Image,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    Text,
    useDisclosure
} from '@chakra-ui/core'
import NextLink from 'next/link'

import Container from './container'

const PostContent = ({ content }) => {
    return content.split('\n').map((line, i) => {
        return (
            <Text fontSize='2xl'>
                {line}
            </Text>
        )
    })
}

const schoolCard = ({ post }) => {
    return (
        <>
            <Box as='section' rounded={6} border='1px solid #b7b7b7' bg='White' width={{ base: '400px', md: '555px', lg: '655px' }} p={4}>
                <Box as='header'>
                    <Box mx={2} textAlign='center'>
                        <Text fontWeight='bold' textAlign='center' h='50px' fontSize='3xl'>
                            {post.title || '無標題'}
                        </Text>
                    </Box>

                    <Box d='flex' justifyContent='space-between'>
                        <Stack isInline>
                            {/* 發文者的頭像 姓名 發文時間 */}
                            <Box
                                as='div'
                                w='50px' h='50px'
                                rounded='50%'
                                d='flex'
                                alignItems='center'
                                justifyContent='center'
                                overflow='hidden'
                            >
                                <Image
                                    src={post.profilePhoto}
                                />
                            </Box>
                            <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
                                <Text fontSize='lg'>{post.name}</Text>
                                <Text fontSize='md' color='gray.400'>
                                    {post.createdAt}
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                {/* 貼文的內文與照片 */}
                <Box as='article' mt={2}>
                    {/* 內文的文字 */}
                    <Box as='div' textAlign='left' p={5}>
                        <PostContent content={post.content || ''} />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default schoolCard