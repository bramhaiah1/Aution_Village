import { Header,Right,Body,Title,Left, Button, Label, Icon, Card, CardItem } from 'native-base';
import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {colors} from "../../styles/colors";
import { View } from 'react-native';
class ScondScreen extends Component{
   render(){ return(<View>
<Header style={{backgroundColor:colors.white}}>
    <Left>
    <AntDesign onPress={()=>this.props.navigation.navigate('Login')} name='arrowleft'  color={colors.activedotcolor} size={30} />

    </Left>
    <Body>
                             
                                      
                             <Title style={{fontWeight:"bold",color:"black"}}>SMS verification</Title>
                         </Body>
</Header>


   </View>
    )
   }
}
export default ScondScreen