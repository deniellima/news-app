import { View, Text, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './register/styles';
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

            <div className='flex-1 bg-zinc-50 dark:bg-zinc-950 overflow-scroll'>
                {/* <View style={styles.detail}/> */}

                <View style={styles.content}>
                    <StepperRegister /> 
                </View>
            </div> 
        </View>
  );
}