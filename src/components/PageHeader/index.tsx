import React from 'react';
import { View , Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps{
    title: string
}


const PageHeader: React.FC<HeaderProps> = ( { title }) =>{
    const navigation = useNavigation();

    function handleGetBack(){
        navigation.navigate('Landing');
    };

    return(
        <View  style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGetBack}>
                    <Image source={backIcon} resizeMode='contain'/>
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain'/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}

export default PageHeader;