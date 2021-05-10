/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {} from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import ConsleiMiniIcon from '../assets/iconsLeiWBG.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';


const TabArea = styled.View`
    height: 60px;
    background-color: #4bd194;
    flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4bd194;
    margin-top: -20px;
`;


export default ({ state, navigation }) => {


    const goToHome = () => {
        navigation.reset({
            routes: [{name: 'Home'}],
        });
    };

    const goToSearch = () => {
        navigation.reset({
            routes: [{name: 'Search'}],
        });
    };

    const goToAppointments = () => {
        navigation.reset({
            routes: [{name: 'Appointments'}],
        });
    };

    const goToFavorites = () => {
        navigation.reset({
            routes: [{name: 'Favorites'}],
        });
    };

    const goToProfile = () => {
        navigation.reset({
            routes: [{name: 'Profile'}],
        });
    };

    // const goTo = (screenName) => {
    //     navigation.navigate(screenName);
    // };

    return (
        <TabArea>
            <TabItem onPress={goToHome}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={goToSearch}>
                <SearchIcon style={{opacity: state.index === 1 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={goToAppointments} >
                <ConsleiMiniIcon width="62" height="62" fill="#4bd194" />
            </TabItemCenter>
            <TabItem onPress={goToFavorites} >
                <FavoriteIcon style={{opacity: state.index === 3 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={goToProfile}>
                <AccountIcon style={{opacity: state.index === 4 ? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
};
