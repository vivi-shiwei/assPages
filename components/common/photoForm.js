import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'

const Filestack = dynamic(() => import('./ReactFilestack'), { ssr: false })

const PhotoFrom = (props) => {
    return (
        <>
            <Filestack
                apikey='Ah6KQ39reQQSB2asw0T9iz'
                onSuccess={() => {
                    console.log('onSuccess')
                }}
                actionOptions={{
                    maxFiles: 1,
                    accept: ['image/*'],
                    // lang: 'zh'
                    storeTo: {
                        path: props.imageURL
                    },
                    onFileUploadFinished: file => {
                        const key = file.key
                        if (props.getPhotoURL) props.getPhotoURL(file)
                    }
                }}
                componentDisplayMode={{
                    type: 'button',
                    customText: '',
                    customClass: 'sumbit-photo-btn'
                }}
            />
            <style jsx>
                {`
          :global(.sumbit-photo-btn) {
            height: 100px;
            width: 100px;
            border-radius: 50%;
          }
          :global(.sumbit-photo-btn:focus) {
            outline: none
          }
        `}
            </style>
        </>
    )
}

export default PhotoFrom
