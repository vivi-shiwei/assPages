import React, { useState } from 'react'

import {
    Box,
    Image,
    Icon,
    Flex,
    Text,
    Button
} from '@chakra-ui/core'

const ImageViewer = ({ images }) => {
    const [index, setIndex] = useState(9)
    return (
        <Box>
            {!!images && (
                <>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Button mt={1} ml={1}>
                            <Icon
                                aria-label='上一張'
                                size='50px'
                                name='chevron-left'
                                onClick={() => { setIndex(index === 0 ? images.length - 1 : index - 1) }}
                            />
                        </Button>
                        <Text>
                            {`照片 (${index + 1}/${images.length})`}
                        </Text>
                        <Button mt={1} mr={1}>
                            <Icon
                                aria-label='下一張'
                                size='50px'
                                name='chevron-right'
                                onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                            />
                        </Button>
                    </Flex>
                    <Image
                        src={images[index].url}
                        size='100%'
                        objectFit='cover'
                        cursor='pointer'
                        onClick={() => { setIndex(index === images.length - 1 ? 0 : index + 1) }}
                    />
                </>
            )}

        </Box>
    )
}

export default ImageViewer
