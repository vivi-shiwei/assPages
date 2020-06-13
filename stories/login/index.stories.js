import React from 'react';
import {
    Box,
    InputGroup,
    Select,
    Input,
    Flex,
    Text
} from '@chakra-ui/core'
import { SchoolPage } from '../../components/layout'
import FullscreenView from '../../components/fullscreenView'
import { LoginButton, BriefButton, PhoneButton } from '../../components/loginButtonSet'
import App from '../../App'

import {
    LargeTitle,
    FullscreenContent
} from './style'

const Login = ({ redirectPath }) => {
    return (
        <SchoolPage>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>登入</LargeTitle>
                    <LoginButton />
                </FullscreenContent>
            </FullscreenView>
        </SchoolPage>
    )
}

const brief = ({ redirectPath }) => {
    return (
        <SchoolPage>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>簡訊驗證</LargeTitle>
                    <Text fontSize="xl" w>
                        請留意發送到手機的6位驗證碼信息
                    </Text>
                    <BriefButton />
                </FullscreenContent>
            </FullscreenView >
        </SchoolPage >
    )
}

const phone = ({ redirectPath }) => {
    return (
        <SchoolPage>
            <FullscreenView>
                <FullscreenContent justifyContent='center'>
                    <LargeTitle>手機登入</LargeTitle>
                    <PhoneButton />
                </FullscreenContent>
            </FullscreenView>
        </SchoolPage >
    )
}
export default { title: 'Login' };

export const Logins = () => { return App(Login) };
export const Briefs = () => { return App(brief) };
export const phones = () => { return App(phone) };

