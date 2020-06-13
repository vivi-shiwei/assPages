import React from 'react';
import {
    Box,
    Image
} from '@chakra-ui/core'

import MyImage4 from "../../static/timgXOPS3YTR.jpg"
import MyImage6 from "../../static/timg.jpg"
const ImagesGongge = (props) => {
    const content = []
    let itemContent = []
    let items = []
    items.push(
        <ImagesItem
            imageURL={MyImage6}
            images={MyImage6}
            setImageView={props.setImageView}
        />)

    return (
        <Box>
            <ImagesContent>
                opkrtgporjtg
                    </ImagesContent>

            <style jsx global>
                {`
            .grid-images {
              display: flex;
            }
  
            .grid-images .imgs .img-item{
              position: absolute;
              top: 0px;
              left: 0px;
  
              width: 100%;
              height: 100%;
  
              overflow: hidden;
  
              display: flex;
              justify-content: center;
              align-items: center;
            }
  
            .grid-images .imgs:after {
              content: "";
              display: block;
              padding-bottom: 100%;
            }
  
            .grid-images .imgs {
              width: 100%;
              position: relative;
              display: inline-block;
              background: white;
            }
  
            .grid-images.images-total-3 .imgs:nth-child(2n) {
              margin: 0 5px;
            }
  
            .grid-images.images-total-2 .imgs:first-child {
              margin-right: 5px;
            }
          `}
            </style>
        </Box>
    )
}

// 只裝三個
const ImagesContent = (props) => {
    return (
        <Box as='div' className={`grid-images ${props.className}`} mt={2}>
            {props.children}
        </Box>
    )
}

// 圖片列表
const ImagesItem = (props) => {
    return (
        <Box as='div' key={props.id} className='imgs'>
            <Box className='img-item'>
                <Image
                    src={MyImage4}
                    onClick={() => { props.setImageView({ photos: props.images, index: props.index }) }}
                />
            </Box>
        </Box>
    )
}

export default ImagesGongge
