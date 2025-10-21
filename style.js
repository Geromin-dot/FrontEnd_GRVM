import { StyleSheet } from "react-native";

const Colors = {
    primary: '#00B8D4',
    background: '#FFF8E1',
    lightGrey: '#E0F7FA',
    textDark: '#263238',
    textMuted: '#78909C',
    inputBorder: '#B2EBF2',
    buttonText: '#FFFFFF',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background, 
        padding: 30,
    },
    
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },


    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 40,
        marginTop: 20,
        textAlign: 'center',
    },

    containerButton: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    buttonSpacing: {
        marginBottom: 15,
    },

    primaryButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
    },
    primaryButtonText: {
        color: Colors.buttonText,
        fontSize: 18,
        fontWeight: '700',
    },


    textInput: {
        height: 50,
        borderColor: Colors.inputBorder,
        borderWidth: 2,
        marginBottom: 20,
        width: '100%',
        maxWidth: 400,
        paddingHorizontal: 15,
        borderRadius: 12,
        backgroundColor: Colors.lightGrey,
        fontSize: 16,
        color: Colors.textDark,
        alignSelf: 'center',
    },
    
    item: {
        padding: 15,
        backgroundColor: Colors.lightGrey,
        borderRadius: 12,
        marginBottom: 10,
        borderLeftWidth: 5,
        borderLeftColor: Colors.primary,
    },
    full_name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 5,
    },
    userInfo: {
        fontSize: 14,
        color: Colors.textMuted,
    },
});
