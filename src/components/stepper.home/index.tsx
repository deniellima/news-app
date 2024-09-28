import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Svg, { Line } from 'react-native-svg';
import { useState } from 'react';
import { styles } from './styles';
import { PreSets } from '@/styles/preSets';
import { colors } from '@/styles/colors';


export function StepperHome () {
    const steps = [1, 2, 3];
    const [currentStep, setCurrentStep] = useState(steps[0])
    const next = () => {
        setCurrentStep(currentStep + 1)
    }

    if (currentStep === 1) {
        return (
            <View style={styles.content}>
                <Svg height={4} width='100%' style={styles.detail}>
                    <Line x1='40%' y1='50%' x2='60%' y2='50%' stroke={colors.gray[100]} strokeWidth={4} strokeLinecap='round' />
                </Svg>
                <Text style={PreSets.tb}>Fique por dentro das principais notícias e fofocas sem perder muito tempo!</Text>
                <TouchableOpacity style={PreSets.b4} onPress={next}>
                    <Text>Continuar</Text>
                    <Feather name='arrow-right' size={16} />
                </TouchableOpacity>
            </View> 
        )
    }

    if (currentStep === 2) {
        return (
            <View style={styles.content}>
                <Svg height={4} width='100%' style={styles.detail}>
                    <Line x1='40%' y1='50%' x2='60%' y2='50%' stroke={colors.gray[100]} strokeWidth={4} strokeLinecap='round' />
                </Svg>
                <Text style={PreSets.tb}>Texto dois, estou sem criatividade</Text>
                <TouchableOpacity style={PreSets.b4} onPress={next}>
                    <Text>Continuar</Text>
                    <Feather name='arrow-right' size={16} />
                </TouchableOpacity>
            </View> 
        )
    }

    if (currentStep === 3) {
        return (
            <View style={styles.content}>
                <Svg height={4} width='100%' style={styles.detail}>
                    <Line x1='40%' y1='50%' x2='60%' y2='50%' stroke={colors.gray[100]} strokeWidth={4} strokeLinecap='round' />
                </Svg>
                <TouchableOpacity style={PreSets.b2}>
                    <Text style={PreSets.tw}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PreSets.b1}>
                    <Text style={PreSets.tw}>Criar conta</Text>
                </TouchableOpacity>
                <View style={styles.or}>
                    <Svg height={16} width='100%'>
                        <Line x1='0%' y1='50%' x2='100%' y2='50%' stroke={colors.gray[200]} strokeWidth={1} />
                    </Svg>
                    <Text style={PreSets.label}>Ou</Text>
                    <Svg height={16} width='100%'>
                        <Line x1='0%' y1='50%' x2='100%' y2='50%' stroke={colors.gray[200]} strokeWidth={1} />
                    </Svg>
                </View>
                <TouchableOpacity style={PreSets.b3}>
                    <FontAwesome name='google' size={18} color={colors.gray[400]} />
                    <Text style={PreSets.tw}>Entrar com google</Text>
                </TouchableOpacity>
            </View> 
        )
    }

    else {
        return null
    }
} 