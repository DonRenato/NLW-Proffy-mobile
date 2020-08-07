import React, { useState } from 'react';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import api from '../../assets/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [weekday, setWeeDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFAvorites(){
        AsyncStorage.getItem('favorites').then(res =>{
            if(res) {
                const favoritedTeacher = JSON.parse(res);
                const favoritedTeachersId = favoritedTeacher.map((teacher: Teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeachersId);
            }
        })
    }

    useFocusEffect(()=>{
        loadFAvorites();
    })

    async function handleFiltersSubmit(){
        loadFAvorites();
        const res = await api.get('classes', {
            params:{
                subject,
                weekday,
                time
            }
        })
        setIsFiltersVisible(false);
        setTeachers(res.data);
    }


    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }
   return(
       <View 
            style={styles.container}
        >
           <PageHeader  
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={ 20 } color="#fff" />
                    </BorderlessButton>
                )}    
            >
               { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>
                                Materia
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor='#c1bccc'
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                    <Text style={styles.label}>
                                        Dia da semana
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Qual o dia?"
                                        value={weekday}
                                        onChangeText={text => setWeeDay(text)}
                                        placeholderTextColor='#c1bccc'
                                    />
                            </View>

                            <View style={styles.inputBlock}>
                                    <Text style={styles.label}>
                                        Horário
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Qual o horário?"
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholderTextColor='#c1bccc'
                                    />
                            </View>

                        </View>

                        <RectButton 
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>

                        </RectButton>


                    </View>
               )}
           </PageHeader>
           <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
                }}
            >
            {teachers.map((teacher: Teacher) => (
                <TeacherItem 
                    key={teacher.id} 
                    teacher={teacher} 
                    favorited={favorites.includes(teacher.id)}
                />
            ))}
            
            
           </ScrollView>
           
           
       </View>
   );
}

export default TeacherList;