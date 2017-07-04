import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class Home extends Component {
    onPress(){
        this.props.navigator.push({
            id: 'doctorList'
        })
    }

    render(){
        return (
            <View style={styles.home}>
                <View style={styles.row1}>
                    <TouchableHighlight onPress={()=>this.onPress()}>
                        <Image 
                            source={require('../images/doctor.png')}
                            style={styles.doctor} >
                        </Image>  
                    </TouchableHighlight>     
                    <Image 
                        source={require('../images/lab.png')}
                        style={styles.lab}>
                    </Image>
                </View>
                <View style={styles.row2}>
                    <Image 
                        source={require('../images/healthcare.png')}
                        style={styles.healthcare} >
                    </Image> 
                    <Image 
                        source={require('../images/medicine.png')}
                        style={styles.lab}>
                    </Image>
                </View>
                <Text style={styles.text}>Welcome, select the suitable option.</Text>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "#c8e2ec"
    },
    text: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30,
        color: "#1f536b"
    },
    row1: {
        marginTop: 50,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
    },
    row2: {
        marginTop: 80,
        marginLeft: 10,
        flex: 1,
        flexDirection: 'row',
    },
    doctor: {
        height: 200,
        width: 200,
        flex: 1,
        resizeMode: 'contain'
    },
    lab: {
        height: 100,
        width: 100,
        marginLeft: 30,
        marginTop: 40,
        flex: 1,
        resizeMode: 'contain'
    },
    healthcare: {
        height: 140,
        width: 140,
        flex: 1,
        marginLeft: 30
    }
});