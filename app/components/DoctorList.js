import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import moment from 'moment';

export default class DoctorList extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { 
            userDataSource: ds,
            journeyText: '',
            journeyDate: null
        };
    }

    componentDidMount(){
        this.fetchDoctors();
    }

    fetchDoctors(){
        fetch('http://192.168.15.100:2000/api/doctors')
        .then((response) => response.json())
        .then((response) => {
            this.setState({
                userDataSource: this.state.userDataSource.cloneWithRows(response.body)
            })
        })

        // var doctors = [
        //     {
        //         name: 'Ajitej',
        //         exp: 23,
        //         speciality: 'Physician',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Rajat',
        //         exp: 12,
        //         speciality: 'Paedatrician',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Prashant',
        //         exp: 2,
        //         speciality: 'Physician',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Ravindra',
        //         exp: 23,
        //         speciality: 'Neurologist',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Rahul',
        //         exp: 23,
        //         speciality: 'ENT',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Vipul',
        //         exp: 13,
        //         speciality: 'Gynae',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Himanshu',
        //         exp: 26,
        //         speciality: 'Physician',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Rohan',
        //         exp: 45,
        //         speciality: 'Neurologist',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     },
        //     {
        //         name: 'Anurag',
        //         exp: 30,
        //         speciality: 'Paedatrician',
        //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        //         image: require('../images/doctorImage.png')
        //     }
        // ]

        // this.setState({
        //     userDataSource: this.state.userDataSource.cloneWithRows(doctors)
        // })
    }

    onPress(){
        this.props.navigator.push({
            id: 'home'
        })
    }

    doctorDetail(doctor){
        this.props.navigator.push({
            id: 'doctorDetail',
            doctor: doctor
        })
    }

    renderRow(doctor, sectionId, rowId, highlightRow){
        return(
            <View style={styles.row}>
                <TouchableHighlight onPress={()=>{this.doctorDetail(doctor)}}>
                    <Image source={{uri: doctor.image}} style={styles.doctorImage} />
                </TouchableHighlight>    
                <View style={{flex: 1}}>
                    <Text style={styles.rowText}>{doctor.name} has {doctor.exp} yrs of exp in {doctor.speciality} </Text>
                    <TouchableOpacity onPress={()=>{this.doctorDetail(doctor)}} >
                        <View style={styles.bookingBox}>
                            <Text style={styles.bookingText}>Book Appointment</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )  
    }

    render() {
        return (
            <View>
                <TouchableHighlight style={styles.container} onPress={()=>this.onPress()}><Text style={styles.text}>{'< Back'}</Text></TouchableHighlight>
                <ListView
                    dataSource={this.state.userDataSource}
                    renderRow={this.renderRow.bind(this)}
                />    
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3,
    },
    rowText: {
        flex: 1,
        fontSize: 20
    },
    doctorImage: {
        height: 100,
        width: 100,
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'flex-start'
    },
    button: {
      backgroundColor: "#c8e2ec",
      padding: 10,
      alignItems: 'center',
      marginTop: 15,
      marginLeft: 100,
      marginRight: 100
    },
    bookingBox:{
        marginTop: 9,
        borderColor: '#ABABAB',
        backgroundColor: '#c8e2ec',
        padding: 0,
        height: 38,
        justifyContent:'center',
        alignContent: 'center'
    },
    bookingText: {
        fontSize: 20,
        color: '#1f536b',
        paddingLeft: 58
    },
})