/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #ccf6ef;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #289463;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #000;
    margin-bottom: 1px; 
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-left: 5px;
    margin-bottom: 1px; 
`;

export const SignMessageButtonTextH = styled.Text`
    font-size: 16px;
    color: #000;
    margin-bottom: 5px; 
    textAlignVertical: top;
    
`;
export const SignMessageButtonTextBoldH = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-left: 5px;  
    margin-bottom: 5px; 
    textAlignVertical: top;
    
`;

