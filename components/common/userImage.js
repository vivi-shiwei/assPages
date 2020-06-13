import React from 'react';
import {
    Box,
    Image
} from '@chakra-ui/core'
// import PhotoFrom from 'components/common/photoForm'
import { GoDeviceCamera } from 'react-icons/go'

const userImage = (props) => {
    return (
        <Box textAlign='center'>
            <Box
                h='100px'
                w='100px'
                position='relative'
                d='inline-block'
                borderRadius='50%'
                overflow='hidden'
                border='1px solid #CBD5E0'
                zIndex='1'
            >
                {/* <PhotoFrom
            schoolId={props.schoolId}
            imageURL={props.imageURL}
            getPhotoURL={(val) => {
              // 把Filestack成功的數據返回給父類
              if (props.getPhotoURL) props.getPhotoURL(val)
            }}
          /> */}
                <Image
                    imageURL={props.imageURL}
                />
                <Image
                    position='absolute'
                    top='50%'
                    left='50%'
                    width='100%'
                    transform='translate(-50%,-50%)'
                    zIndex='-1'
                    display={props.userImage === null ? 'none' : 'block'}
                    src={props.userImage}
                />
                <Box
                    padding='4px'
                    position='absolute'
                    bottom='-1px'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    backgroundColor='#f3f3f3'
                    color='#5d5d5d'
                    opacity='0.8'
                >
                    <Box as={GoDeviceCamera} />
                </Box>
            </Box>
        </Box>
    )
}

export default userImage
