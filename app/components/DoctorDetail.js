import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button } from 'react-native';

export default class DoctorDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.doctor.name,
            exp: this.props.doctor.exp,
            speciality: this.props.doctor.speciality,
            description: this.props.doctor.description,
            image: this.props.doctor.image
        };
    }

    onPress(){
        this.props.navigator.push({
            id: 'doctorList'
        })
    }

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.container} onPress={()=>this.onPress()}><Text style={styles.text}>{'< Back'}</Text></TouchableHighlight>
                <Image style={styles.doctorImage} source={this.state.image}></Image>
                <View style={styles.detailStyle}>
                    <Text style={styles.doctorName}>{this.state.name}</Text>
                    <Text style={styles.doctorDetailStyle}>{this.state.speciality}</Text>
                    <Text style={styles.doctorDetailStyle}>exp:- {this.state.exp} yrs</Text>
                    <Text style={styles.doctorDescription}>{this.state.description}</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button title="Book Appointment"/>
                </View>
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        backgroundColor: '#c8e2ec',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        paddingLeft: 20,
        height: 44
    },
    doctorImage: {
        marginLeft: 70,
        marginTop: 20
    },
    detailStyle: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
    doctorName: {   
        fontSize: 30
    },
    doctorDetailStyle: {
        fontSize: 20
    },
    doctorDescription: {
        fontSize: 20,
        paddingLeft: 20
    },
    buttonView: {
        marginTop: 15,
    }
})