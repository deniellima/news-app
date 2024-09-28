import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      alignItems: 'center',
    },
    
    header: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    card: {
      backgroundColor: colors.white,
      flex: 1,
      width: '100%',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      overflow: 'hidden',
      paddingBottom: 24,
    },
  });