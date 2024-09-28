import { StyleSheet } from "react-native";
import { fontFamily } from "./fontFamily";
import { colors } from "./colors";

export const PreSets = StyleSheet.create({

    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
  
    // Title ------------------------------------

    // Headline 1
    h1w: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.white,
    },

    h1b: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.black,
    },

    h1g: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.gray[400],
    },

    // Headline 2
    h2w: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.white,
    },

    h2b: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.black,
    },

    h2g: {
        fontFamily: fontFamily.extrabold,
        fontSize: 24,
        color: colors.gray[400],
    },


    // Text ------------------------------------
    tw: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.white,
    },

    tb: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.black, 
    },

    tg: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.gray[400], 
    },

    label: {
        paddingLeft: 4,
        fontFamily: fontFamily.regular,
        fontSize: 12,
        color: colors.gray[400],
    },

    // Button ------------------------------------
    b1: {
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderRadius: 8,
        gap: 6,
    },

    b2: {
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.gray[200],
        borderRadius: 8,
        gap: 6,
    },

    b3: {
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'none',
        borderRadius: 8,
        gap: 6,

        borderStyle: 'solid',
        borderColor: colors.gray[200],
        borderWidth: 1,
    },

    b4: {
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'none',
        borderRadius: 8,
        gap: 6,
    },

    bai: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.ai,
        borderRadius: 8,
        gap: 6,
    },

    bt: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        color: colors.white,
    },

    // Icon button ------------------------------------
    ib1: {
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 8,
    },

    ib2: {
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },

    ib3: {
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'none',
        borderRadius: 8,

        borderStyle: 'solid',
        borderColor: colors.gray[200],
        borderWidth: 1,
    },

    ib4: {
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'none',
        borderRadius: 8,
    },

    ibai: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.ai,
        borderRadius: 8,
    },

    // Other ------------------------------------
    back: {
        zIndex: 1,
        position: 'absolute', 
        alignItems: 'center',
        justifyContent: 'center', 
        top: 24,
        left: 24,
        width: 36,  
        height: 36,
        backgroundColor: colors.white,
        borderRadius: 8,
    },

    pressable: {
        fontFamily: fontFamily.medium,
        fontSize: 12,
        color: colors.primary,
        marginLeft: 4,
    },

    // Input ------------------------------------    
    containerInput:{
        flex: 1,
        gap: 4,
    },

    contentInput:{
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 12,
        borderRadius: 8,

        borderStyle: 'solid',
        borderColor: colors.gray[200],
        borderWidth: 1,
    },

    input: {
        height: 46,
        width: '100%',
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: colors.black,
    },
});