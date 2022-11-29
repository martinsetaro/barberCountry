import * as React from 'react'
import {
Text,
View,
SafeAreaView,
Pressable,
StyleSheet
} from 'react-native'

const OtraPagina = ({navigation}) => {

  return (
    <SafeAreaView>
        <View>
            <Text style={style.titulo}>
                Reservacion de {''} 
                <Text style={style.spanTitulo}>turnos.</Text>
           </Text>
            <Pressable
           style={style.btn}
            onPress={()=> navigation.navigate('Home')}
            >
               <Text style={style.textoBtn}>
                Ir a Home
                </Text> 
            </Pressable>
        </View>
    </SafeAreaView>
    
  )
}

const style= StyleSheet.create({
  titulo:{
    fontSize:40,
    textAlign:'center',
    fontFamily:'Lato-Regular',
    fontWeight:'700'
  },
  spanTitulo:{
    color:'#10DDF7'
  },
  btn:{
    width:'50%',
    height:'auto',
    borderWidth:2,
    borderColor:'#10DDF7',
    borderRadius:10,
    marginHorizontal:90,
    marginTop:30,
    padding:5
   },
   textoBtn:{
    color:'#10DDF7',
    fontFamily:'Lato-Regular',
    fontSize:30,
    fontWeight:'700',
    textAlign:'center'
   }
})

export default OtraPagina