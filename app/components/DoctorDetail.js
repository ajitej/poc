import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, Button, TouchableOpacity } from 'react-native';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class DoctorDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.doctor.name,
            exp: this.props.doctor.exp,
            speciality: this.props.doctor.speciality,
            description: this.props.doctor.description,
            image: this.props.doctor.image,
            defaultText: 'Book Appointment'
        };
        console.log(this.state.image);
    }

    onJourneyDatePress = () => {
        let journeyDate = this.state.journeyDate;
    
        if(!journeyDate || journeyDate == null){
            journeyDate = new Date();
            this.setState({
                journeyDate: journeyDate
            });
        }
    
        console.log(this);
        //To open the dialog
        this.refs.journeyDialog.open({
            date: journeyDate,
            minDate: new Date() //To restirct past date
        });
    }

    onJourneyDatePicked = (date) => {
        this.setState({
            journeyDate: date,
            journeyText: moment(date).format('DD MMM, YYYY')
        });
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
                <Image style={styles.doctorImage} source={{uri: this.state.image}}></Image>
                <View style={styles.detailStyle}>
                    <Text style={styles.doctorName}>{this.state.name}</Text>
                    <Text style={styles.doctorDetailStyle}>{this.state.speciality}</Text>
                    <Text style={styles.doctorDetailStyle}>exp:- {this.state.exp} yrs</Text>
                    <Text style={styles.doctorDescription}>{this.state.description}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={this.onJourneyDatePress.bind(this)} >
                        <View style={styles.datePickerBox}>
                            <Text style={styles.datePickerText}>{this.state.journeyText || this.state.defaultText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <DatePickerDialog ref="journeyDialog" onDatePicked={this.onJourneyDatePicked.bind(this)} />
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
        marginLeft: 100,
        marginTop: 20,
        width: 200,
        height: 200
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
    },
    datePickerBox:{
        marginTop: 9,
        borderColor: '#ABABAB',
        backgroundColor: '#c8e2ec',
        padding: 0,
        height: 38,
        justifyContent:'center',
        alignItems: 'center'
    },
    datePickerText: {
        fontSize: 20,
        color: '#1f536b'
    },
})