import React from 'react';
import { View , Image, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';


function TeacherItem(){
    return(
        <View  style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    source={{uri: 'https://avatars1.githubusercontent.com/u/54222065?s=460&u=5ae1658ec82b97642873d026c4ead83e82aa378a&v=4'}} 
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Seo Dartinho
                    </Text>

                    <Text style={styles.subject}>
                        Religião
                    </Text>
                </View>
            </View>
           
            <Text style={styles.bio}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    {'\n'} {'\n'}
                    Vero, non dolore corporis modi debitis quas, ipsa totam et consectetur aut nulla cumque libero saepe odio provident laudantium iste laboriosam eos.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'  '}
                    <Text style={styles.priceValue}>
                       R$ 80,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.unfavoriteButton]}>
                    {/* <Image source={heartOutLineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
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