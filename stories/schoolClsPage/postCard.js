import React, { useState } from 'react';
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

import Container from '../../components/container'
// import PostForm from './postForm'
import PostModal from './postModal'
import DeleteAlert from './deleteAlert'
import ImageViewer from './imageViewer'
import TagsViewer from './tagsViewer'
import ImagesGongge from './imagesGongge'

import MyImage4 from "../../static/timgXOPS3YTR.jpg"
import MyImage6 from "../../static/timg.jpg"

const PostContent = ({ content }) => {
    return content.split('\n').map((line, i) => {
        return (
            <Text fontSize='2xl'>
                {line}
            </Text>
        )
    })
}
// const currentSchooluser=[{
//     user：{
//         schooluser：'vivi'
//     }

// }]

const schoolCard = ({ post }) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [isImageView, setImageView] = useState(false)
    const [showTags, setShowTags] = useState(null)
    return (
        <>

            {/* <Box as='section' rounded={6} border='1px solid #b7b7b7' bg='White' width={{ base: '100%', md: '655px' }} p={4}>
                <Box as='header'>
                    <Box textAlign='right'>
                        {/* 編輯與刪除的按鈕
                        <Menu>
                            <MenuButton as={Icon} size='30px' name='chevron-down' fontSize='20px' />
                            <MenuList>
                                <MenuItem minH='20px' onClick={() => console.log('haha')}>
                                    <Text>編輯</Text>
                                </MenuItem>
                                <MenuItem minH='20px' onClick={() => setIsAlertOpen(true)}>
                                    <Text>刪除</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                    <Box mx={2} textAlign='center'>
                        <Text fontWeight='bold' textAlign='center' minH='50px' wordBreak='break-word' fontSize='3xl'>
                            {post.title || '無標題'}
                        </Text>
                    </Box>

                    <Box d='flex' justifyContent='space-between'>
                        <Stack isInline>
                            {/* 發文者的頭像 姓名 發文時間 
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
                                    src={MyImage4}
                                    fallbackSrc='/school/static/default-avatar.jpg'
                                />
                            </Box>
                            <Box as='div' ml={2} fontSize={20} fontWeight='bold' textAlign='left'>
                                <Text fontSize='lg'>jdks</Text>
                                <Text fontSize='md' color='gray.400'>
                                    YYYY-MM-DD HH:mm
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                </Box>

                {/* 貼文的內文與照片
                <Box as='article' mt={2}>
                    {/* 內文的文字
                    <Box as='div' textAlign='left' wordBreak='break-word' p={5}>
                        <PostContent content={post.content || ''} />
                    </Box>

                    {/* Talent Name
                    <Box>
                        <Text color='Blue'>
                            #jgvfghbfg
                            </Text>
                    </Box>

                    {/* 照片列表

                    <ImagesGongge
                        images={MyImage6}
                    />

                    <Box d='flex' justifyContent='center'>
                        <button>
                            <Tag variant='outline' variantColor='green'>
                                還有h張照片
                                </Tag>
                        </button>
                    </Box>
                    )}

                    {/* 學生的tag
                    <Box mt={5}>
                        <Stack flexWrap='wrap' isInline>
                            <Box>
                                <Stack isInline>
                                    <Box>
                                        <NextLink
                                            href='/school/'
                                            passHref
                                        >
                                            <Text cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}>
                                                hgjghjghj
                                                </Text>
                                        </NextLink>
                                    </Box>
                                    <Text>和</Text>
                                </Stack>
                            </Box>
                            <Stack isInline>
                                <Text>以及</Text>
                                <Text
                                    cursor='pointer' as='ins' color='Blue' style={{ whiteSpace: 'nowrap' }}

                                >
                                    其他人
                                    </Text>
                            </Stack>
                            )}
                        </Stack>
                    </Box>
                </Box>

                {/* 確認是否刪除的警告訊息
                <DeleteAlert
                    isAlertOpen={isAlertOpen}
                    onAlertClose={() => setIsAlertOpen(false)}
                    header='刪除貼文'
                    body='你確定要刪除了嗎? 這是不能還原的操作。'
                />

                {/* 圖片檢視 
                <PostModal
                    isOpen={!!isImageView}
                    onClose={() => setImageView(null)}
                    isCloseButton={false}
                    type='showImage'
                >
                    <Box>
                        {!!isImageView && (
                            <ImageViewer images={MyImage6} />
                        )}
                    </Box>
                </PostModal>

                {/* 彈出式編輯貼文框
                {/* <PostModal isOpen={isEdit} onClose={closeEdit}>
                    <Box>
                        <PostForm
                            onClose={closeEdit}
                            currentPost={post}
                            clsId={post.clsId}
                            schoolId={post.schoolId}
                            refetchQueries={refetchQueries}
                            schoolTalents={schoolTalents}
                            withTalent={post.school.hasIntelligenceModule}
                            type='showPhoto'
                        />
                    </Box>
                </PostModal>

                {/* Tags 檢視
                <PostModal
                    isOpen={!!showTags}
                    onClose={() => setShowTags(null)}
                    size='xl'
                    type='showStudent'
                >
                    <TagsViewer />
                </PostModal>
            </Box> */}
            <Box as='section' rounded={6} border='1px solid #b7b7b7' bg='White' width={{ base: '400px', md: '555px', lg: '655px' }} p={4}>
                <Box as='header'>
                    <Box mx={2} textAlign='center'>
                        <Text fontWeight='bold' textAlign='center' h='50px' fontSize='3xl'>
                            {post.title || '無標題'}
                        </Text>
                    </Box>

                    <Box d='flex' justifyContent='space-between'>
                        <Stack isInline>
                            {/* 發文者的頭像 姓名 發文時間  */}
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
                    </Box >
                </Box >

                {/* 貼文的內文與照片 */}
                < Box as='article' mt={2} >
                    {/* 內文的文字 */}
                    < Box as='div' textAlign='left' p={5} >
                        <PostContent content={post.content || ''} />
                    </Box >
                </Box >

            </Box >
        </>
    )
}

export default schoolCard