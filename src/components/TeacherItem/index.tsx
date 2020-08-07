import React from 'react';
import { View , Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: string;
    name: string;
    subject: string;
    whatsapp: string
}

interface TeacherItemProps{
    teacher: Teacher;
}


const TeacherItem:React.FC<TeacherItemProps> = ({ teacher }) =>{
    function handleLinkToWhatssApp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    };

    return(
        <View  style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    source={{uri: teacher.avatar }} 
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>

                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>
                </View>
            </View>
           
            <Text style={styles.bio}>
                    {teacher.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'  '}
                    <Text style={styles.priceValue}>
                       R$ {teacher.cost},00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.unfavoriteButton]}>
                    {/* <Image source={heartOutLineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton 
                        onPress={handleLinkToWhatssApp}
                        style={styles.contactButton}    
                    >
                        <Image source={whatsAppIcon} />
                            <Text style={styles.contactButtonText}>
                                Entrar em contato
                            </Text>
                    </RectButton>

                </View>
            </View>
        </View>
    );
}

export default TeacherItem;