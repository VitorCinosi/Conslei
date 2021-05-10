/* eslint-disable prettier/prettier */


import React, {useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import ConsleiLogo from '../../assets/conslei-removebg-preview.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {

            } else {
                navigation.navigate('SignIn');
            }

        };
        checkToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <ConsleiLogo width="100%" height="250" />
            <LoadingIcon size="large" color="FFFFFF" />
        </Container>
    );
};
