import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/fontFamily';

export const styles = StyleSheet.create({
    content: {
        width: '100%',
        gap: 16,
    },

    row: {
        flexDirection: 'row',
        paddingLeft: 4,
        gap: 4,
    },

    footer: {
        width: '100%',
        justifyContent: 'flex-start',
    },

    option: {
        height: 46,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 12,
        
        borderStyle: 'solid',
        borderColor: colors.gray[200],
        borderWidth: 1,
        borderRadius: 8,
    },

    optionSelected: {
        height: 46,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 12,
        
        borderStyle: 'solid',
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 8,
    },

    iconLarge: {
        position: 'relative',
        right: 0,
        marginRight: 16,
    },

    gift: {
        height: 46,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 12,
        backgroundColor: colors.warning,
        
        borderStyle: 'solid',
        borderColor: colors.warning,
        borderWidth: 1,
        borderRadius: 8,
    },

    text: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.warning,
    },

    steps:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },

    step: {
        height: 8,
        width: 8,
        backgroundColor: colors.gray[100],
        borderRadius: 4,
    },

    stepCurent: {
        height: 8,
        width: 8,
        backgroundColor: colors.primary,
        borderRadius: 4,
    },

    stepCompleted: {
        height: 8,
        width: 8,
        backgroundColor: colors.seccess,
        borderRadius: 4,
    },
  });