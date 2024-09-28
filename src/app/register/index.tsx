import { View, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { PreSets } from '@/styles/preSets';
import { colors } from '@/styles/colors';
import { StepperRegister } from '@/components/stepper.register';

export function Register() {
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
                <Text style={PreSets.h1w}>Seja bem vindo!</Text>
            </ImageBackground>

            <View style={styles.card}>
                <View style={styles.detail}/>

                <View style={styles.content}>
                    <StepperRegister /> 
                </View>
            </View> 
        </View>
  );
}