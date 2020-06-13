import React from 'react';
import {
    Flex,
    Heading,
    Divider,
    Text,
    Link,
    IconButton,
    Box,
    Image,
    Button,
    Tooltip
} from '@chakra-ui/core'

import NextLink from 'next/link'
import Style from 'style-it';
import InfiniteScroll from 'react-infinite-scroller'

import { SchoolPage } from '../../components/layout'
import Container from '../../components/container'
import App from '../../App'
import ClsImage from './clsImage'
import PostCard from './postCard'
import AddRequiredCourse from './addRequiredCourse'

import MyImage from "../../static/QQ20200518181405.jpg"
import MyImage3 from "../../static/timg8J2T10BJ.jpg"
import MyImage4 from "../../static/timgXOPS3YTR.jpg"
import MyImage6 from "../../static/timg.jpg"

const onFetchMore = () => {
    const clsMembers = [
        { profilePhoto: MyImage, name: 'vivi' },
        { profilePhoto: MyImage3, name: 'vivi1' },
        { profilePhoto: MyImage4, name: 'vivi2' },
        { profilePhoto: MyImage6, name: 'vivi3' }
    ];

    const postsData = [
        { title: '今日訪談', name: 'vivi', createdAt: '2020-06-11 17:11', content: 'fghtrfhreftgaedrer', profilePhoto: MyImage },
        { title: '今日', name: 'vivdi', createdAt: '2020-06-11 17:11', content: '預計', profilePhoto: MyImage3 },
        { title: '訪談', name: 'vi vi', createdAt: '2020-06-11 17:11', content: '胡', profilePhoto: MyImage6 }
    ];
    return (
        <SchoolPage>
            <Box mt={16} py={4}>
                <Container>
                    <Box as='header' textAlign='center'>
                        <Box d='flex' alignItems='center' justifyContent='center'>
                            <Heading textAlign='center' mx={4}>初甲班</Heading>
                            <IconButton
                                icon='edit'
                                variantColor='blue'
                            />
                        </Box>
                        <ClsImage
                            title='新增成員'
                        >
                            {
                                clsMembers.map((items) => {
                                    return (
                                        <Box
                                            as='span'
                                            w='35px'
                                            h='35px'
                                            mr={1}
                                            d='inline-block'
                                            background='#c3c3c3'
                                            overflow='hidden'
                                            borderRadius='50%'
                                        >
                                            {
                                                items.profilePhoto && (

                                                    <Tooltip label={items.name} placement="left-end">
                                                        <Image src={items.profilePhoto}
                                                            rounded="full"
                                                            size="50px" /></Tooltip>)
                                            }
                                        </Box>
                                    )
                                })
                            }
                        </ClsImage>
                    </Box>
                    <Box>
                        <AddRequiredCourse
                        />
                    </Box>
                    <Heading textAlign='center' mb={10}>初幼班</Heading>

                    <Box d='flex' justifyContent='center'>
                        <NextLink
                            href='#'
                            passHref
                        >
                            <Button
                                variant='outline'
                                variantColor='blue'
                            >
                                九大智能分析
                            </Button>
                        </NextLink>
                    </Box>

                    <Box d='flex' justifyContent='center'>
                        <InfiniteScroll
                            pageStart={0}
                        >
                            {postsData.map(post => (
                                <Box mt={5}>
                                    <PostCard
                                        post={post}
                                    />
                                </Box>
                            ))}
                        </InfiniteScroll>
                    </Box>
                </Container>
            </Box>
            <style jsx>
                {`
          .test:after {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            height: 100%;
            width: 3.2rem;
            z-index: 1;
            box-shadow: -4px 0 6px 6px #ebf8ff;
            border-radius: 1rem;
          }
        `}
            </style>
        </SchoolPage >
    )
}

export default { title: 'onFetchMore' };

export const FetchMore = () => App(onFetchMore);