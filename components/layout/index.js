import React from 'react';
import {
    Box,
    Heading,
    CSSReset
} from '@chakra-ui/core'
import SchoolHeader from './schoolHeader'
import HomeHeader from './homeHeader'
import HomeFooter from './homeFooter'



const homeConfig = theme => ({
    light: {
        color: theme.colors.gray[800],
        bg: undefined,
        borderColor: theme.colors.gray[200],
        placeholderColor: theme.colors.gray[400]
    }
})

const schoolConfig = theme => ({
    light: {
        color: theme.colors.gray[800],
        bg: theme.colors.blue[50],
        borderColor: theme.colors.gray[300],
        placeholderColor: theme.colors.gray[400]
    }
})

export const HomeSchool = (props) => {
    let config

    return (
        < Box>
            <CSSReset config={homeConfig} />
            <HomeHeader />
            <Box
                width='full'
                height='full'
                {...props} />
            <HomeFooter />
        </Box >
    )
}

export const SchoolPage = (props) => {
    let config

    return (
        < Box>
            <CSSReset config={schoolConfig} />
            <SchoolHeader bg="blue.50" />
            <Box
                bg="blue.50"
                width='full'
                height='full'
                {...props} />
        </Box >
    )
}

// const schoolConfig = theme => ({
//     light: {
//         color: theme.colors.gray[800],
//         bg: theme.colors.blue[50],
//         borderColor: theme.colors.gray[300],
//         placeholderColor: theme.colors.gray[400]
//     }
// })
// const layout = props => {
//     let config
//     return (
//         < Box>
//             <CSSReset config={schoolConfig} />
//             <SchoolHeader bg="blue.50" />
//             <Box
//                 bg="blue.50"
//                 width='full'
//                 height='full'
//                 pb={90}
//                 {...props} />
//         </Box >
//     )
// }

// export default layout
