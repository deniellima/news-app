import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './home/styles';
import { PreSets } from '@/styles/preSets';
import { StepperHome } from '@/components/stepper.home';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.header} source={require("@/assets/images/city.png")}>
        <Text style={PreSets.h1w}>Guara News</Text>
        <Text style={PreSets.label}>Bem vindo</Text>
      </ImageBackground>

      <View style={styles.card}>
          <StepperHome />
      </View>
    </View>
  );
}


