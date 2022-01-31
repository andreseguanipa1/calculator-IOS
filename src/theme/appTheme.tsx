import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 95,
        textAlign: 'right',
        marginBottom: 10,
        fontFamily: 'sans-serif-thin'
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 50,
        textAlign: 'right',
        fontFamily: 'sans-serif-thin'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: '1%'
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 43,
        color: 'white',
        fontWeight: '300',
        fontFamily: 'sans-serif-thin'
    }

});