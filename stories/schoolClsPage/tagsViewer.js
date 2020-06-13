import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Divider,
    Stack
} from '@chakra-ui/core'

import NextLink from 'next/link'

import MyImage5 from "../../static/QQ20200518181405.jpg"
import MyImage6 from "../../static/timg.jpg"
import MyImage7 from "../../static/timg8J2T10BJ.jpg"
import MyImage8 from "../../static/timgXOPS3YTR.jpg"

const TagsViewer = ({ postId, schoolSeqId }) => {
    const participants = [{
        profilePhoto: MyImage5,
        name: 'vivi',
        currentClsMember: {
            cls: {
                name: 'vivi'
            },
            num: 3
        }
    }, {
        profilePhoto: MyImage6,
        name: 'vivi2',
        currentClsMember: {
            cls: {
                name: 'vivi'
            },
            num: 3
        }
    }]

    return (
        <Box>
            {!!participants && (
                <Box p={5}>
                    {participants.map((participant, i) => (
                        <Box>
                            <NextLink
                                href='/school'
                                passHref
                            >
                                <Flex as='a' justifyContent='center' alignItems='center' my={2}>
                                    <Box
                                        as='div'
                                        w='70px' h='70px'
                                        rounded='50%'
                                        d='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                        overflow='hidden'
                                        mr={4}
                                    >
                                        <Image
                                            src={getImgixUrl(participant.profilePhoto, '?w=100')}
                                            fallbackSrc='/school/static/default-avatar.jpg'
                                        />
                                    </Box>
                                    <Box>
                                        <Box>
                                            <Text fontSize='lg' fontWeight='bold'>
                                                {participant.name}
                                            </Text>
                                        </Box>
                                        <Box>
                                            {!!participant.currentClsMember && (
                                                <Stack isInline>
                                                    <Text fontSize='lg' color='gray.500'>
                                                        {`${participant.currentClsMember.cls.name}`}
                                                    </Text>
                                                    {!!participant.currentClsMember.num && (
                                                        <Text fontSize='lg' color='gray.500'>
                                                            {`(${participant.currentClsMember.num})`}
                                                        </Text>
                                                    )}
                                                </Stack>
                                            )}
                                        </Box>
                                    </Box>
                                </Flex>
                            </NextLink>
                            <Divider mx={5} />
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}

export default TagsViewer
