import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.black,
        overflow: 'hidden',
    },

    header: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -12,
    },

    image: {
        opacity: 0.6,
        position: 'absolute',  
        bottom: 0,
        width: '110%',  
        height: 'auto',  
        resizeMode: 'cover',  
    },

    card: {
        backgroundColor: colors.white,
        flex: 2,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        overflow: 'hidden',
        paddingVertical: 24,
        alignItems: 'center',
    },
    

    content: {
        width: '100%',
        paddingHorizontal: 24,
        gap: 16,
    },

    footer: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 48,
        justifyContent: 'flex-start',
    },

    detail: {
        height: 6,
        width: 80,
        marginBottom: 24,
        borderRadius: 3,
        backgroundColor: colors.gray[50],
    },
  });