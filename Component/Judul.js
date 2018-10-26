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
        color: '#47993c',
        fontSize : 20,
        fontWeight: 'bold',
        
    }
}
export default Judul;