import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
    render(){
        return(
            <Text style={salon.judul}>{this.props.judul}</Text>
        )
    }
}
const salon = {
    judul: {
        color: '#fff',
        fontSize : 20,
        fontWeight: 'bold',
        backgroundColor: '#f00'
    }
}
export default Judul;