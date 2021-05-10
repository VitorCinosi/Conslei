/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */



import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,

} from './styles';

import SignInput from '../../components/SignInput';

import ConsleiLogo from '../../assets/conslei-removebg-preview.svg';
import EmailIcon from '../../assets/email.svg';
import PersonIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';
import EndIcon from '../../assets/my_location.svg';

export default () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    //const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [endField, setEndField] = useState('');
    const [cnpjField, setcnpjField] = useState('');

    const handleSignClick = () => {

    };

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}],
        });
    };

    return (
        <Container>
            <ConsleiLogo width="100%" height="250" />

            <InputArea>
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder="Digite o nome do Hospital"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                 />

                <SignInput 
                    IconSvg={EndIcon}
                    placeholder="Digite o endereço"
                    value={endField}
                    onChangeText={t=>setEndField(t)}
                 />

                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite o CNPJ"
                    value={cnpjField}
                    onChangeText={t=>setcnpjField(t)}
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

        </Container>
    );
};
