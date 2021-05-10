/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */


import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {UserContext} from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SignMessageButtonTextH,
    SignMessageButtonTextBoldH,

} from './styles';

import SignInput from '../../components/SignInput';

import ConsleiLogo from '../../assets/conslei-removebg-preview.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {

    //const {dispach: userDispach} = useContext(UserContext);

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () => {
        if (nameField !== '' && emailField !== '' && passwordField !== '') {

        } else {
            // eslint-disable-next-line no-alert
            alert('Preencha os campos');
        }
    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}],
        });
    };

    const handleMessageButtonClickHosp = () => {
        navigation.reset({
            routes: [{name: 'SignUpH'}],
        });
    };

    return (
        <Container>
            <ConsleiLogo width="100%" height="250" />

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                 />

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                 />

                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                   <CustomButtonText>CADASTRAR</CustomButtonText> 
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

            <SignMessageButton onPress={handleMessageButtonClickHosp}>
                <SignMessageButtonTextH>Cadastro de Hospital?</SignMessageButtonTextH>
                <SignMessageButtonTextBoldH>Clique Aqui</SignMessageButtonTextBoldH>
            </SignMessageButton>

        </Container>
    );
};
