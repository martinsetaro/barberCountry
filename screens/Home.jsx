import * as React from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Pressable,
    ImageBackground
} from 'react-native'





const Home = ({navigation}) => {
  return (
      <SafeAreaView>
        <View style={style.contenedor}>
            <ImageBackground
            style={style.image}
            source={require('../src/img/barber2.jpg')}
            resizeMode='cover'
            >
            <Text style={style.texto}>
                Barber 
            </Text>
            <Text style={style.Subtexto}>
                Country 
            </Text>
            <Pressable
            style={style.btn}
            onPress={()=> navigation.navigate('reservas')}
            >
               <Text style={style.textoBtn}>
                Reservar
                </Text> 
            </Pressable>
         </ImageBackground>   
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    texto:{
        fontSize:80,
        fontFamily:"Rancho-Regular",
        color:'#fff',
        textAlign:'center',
        marginTop:250,
        },
       contenedor:{
        height:700,
       },
       image:{
        flex:1
       },
       Subtexto:{
        color:'#fff',
        fontSize:90,
        fontFamily:'Rancho-Regular',
        textAlign:'center',
        marginTop:-20
        
       },
       btn:{
        width:'50%',
        height:'auto',
        borderWidth:2,
        borderColor:'#10DDF7',
        borderRadius:10,
        marginHorizontal:100,
        marginTop:30,
        padding:6
       },
       textoBtn:{
        color:'#10DDF7',
        fontFamily:'Lato-Regular',
        fontSize:40,
        textAlign:'center'
       }

})


export default Home