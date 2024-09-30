import { View, Text, TextInput, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { styles } from './login/styles';
import { PreSets } from '@/styles/preSets';
import { colors } from '@/styles/colors';

export function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={PreSets.back}>
                <Feather name="arrow-left" size={18} color={colors.black} />
            </TouchableOpacity>

            <ImageBackground 
                style={styles.header} 
                source={require("@/assets/images/skyline.png")}
                imageStyle={styles.image}
                >
                <Text style={PreSets.h1w}>Bem vindo de volta</Text>
            </ImageBackground>

            <View style={styles.card}>
                <View style={styles.detail}/>

                <View style={styles.content}>
                    {/* Input email */}
                    <View style={PreSets.containerInput}>
                        <Text style={PreSets.label}>Email</Text>
                        <View style={PreSets.contentInput}>
                            <Feather name="mail" size={18} color={colors.gray[200]} />
                            <TextInput 
                                style={PreSets.input} 
                                placeholder='Informe seu email' 
                                placeholderTextColor={colors.gray[400]} 
                                enterKeyHint='next'
                            />
                        </View>
                    </View>

                    {/* Input password */}
                    <View style={PreSets.containerInput}>
                        <Text style={PreSets.label}>Senha</Text>
                        <View style={PreSets.contentInput}>
                            <Feather name="lock" size={18} color={colors.gray[200]} />
                            <TextInput 
                                style={PreSets.input} 
                                placeholder='Informe sua senha' 
                                placeholderTextColor={colors.gray[400]} 
                                enterKeyHint='next'
                                secureTextEntry={!passwordVisible}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={18} color={colors.gray[200]} />
                            </TouchableOpacity>
                        </View>
                        <Pressable>
                            <Text style={PreSets.pressable}>Esqueceu a senha?</Text>
                        </Pressable>
                    </View>

                    {/* Button */}
                    <TouchableOpacity style={PreSets.b1}>
                        <Text style={PreSets.bt}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={PreSets.label}>
                        Ainda não possiu uma conta? 
                        <Pressable> 
                            <Text style={PreSets.pressable}>Criar conta</Text>
                        </Pressable> 
                    </Text>
                </View>
            </View> 
        </View>
  );
}


