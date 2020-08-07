import React, { useState } from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useFocusEffect(()=>{
        loadFAvorites();
    });

    function loadFAvorites(){
        AsyncStorage.getItem('favorites').then(res =>{
            if(res) {
                const favoritedTeachers = JSON.parse(res);
                setFavorites(favoritedTeachers);
            }
        })
    }
   return(
      <View 
            style={styles.container}
        >
           <PageHeader  title="Proffys disponíveis"/>
           <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
                }}
                >
            {favorites.map((teacher: Teacher) =>{
                return(
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                    />
                );
            })}
            
           </ScrollView>
           
           
       </View>
   );
}

export default Favorites;