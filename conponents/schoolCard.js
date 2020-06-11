import React from 'react';
import {
    Box
} from '@chakra-ui/core'
import NextLink from 'next/link'
import Style from 'style-it';

const schoolCard = (props) => {
    return (
        <>
            <Box
                as='article'
                w='250px'
                bg='white'
                d='inline-block'
                borderRadius='10px'
                position='relative'
                mr='20px'
                mb='20px'
                shadow='2px 2px 6px 0px #b9b9b9'
                className='home-card-item'
            >
                <NextLink
                    href='#'
                    passHref
                >
                    <Box
                        as='a'
                        className='card-link'
                    >
                        <Box
                            as='div'
                            p='15px'
                            className='card-content'
                        >
                            <Box as='div'>
                                <Box
                                    as='h2'
                                    fontSize='20px'
                                    fontWeight='bold'
                                >
                                    {props.title}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </NextLink>
                {/* <Box as='div' position='absolute' top='0px' /> */}
            </Box>
            <style jsx>
                {`
            .home-card-item:before{
              content: '';
              display: block;
              padding-top: 55%;
            }
            .card-link,
            .card-content{
                position:absolute;
                top:0px;
                left:0px;
                right:0px;
                bottom:0px;
                text-align: left;
                overflow: hidden;
                word-wrap:break-word;
            }
          `}
            </style>
        </>
    )
}

export default schoolCard
