import React, { cloneElement } from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome } from '@expo/vector-icons';

const Login = ({loginHandler}) => {

    return (
        <LinearGradient
          colors={['#ffcc33', '#fab001']}
          style={styles.container}>
                <View style={styles.loginBackground}>
                    <Image
                        style={styles.centerImage}
                        source={require('../assets/images/login_1.png')}
                    />
                    <Image
                        style={styles.centerImageGradient}
                        source={require('../assets/images/login_2.png')}
                    />
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity 
                    style={styles.facebookLogin}
                    onPress={()=>loginHandler(12)}
                    >
                        <FontAwesome 
                        name="facebook-f"
                        size={24}
                        color='#fff'
                        style={styles.Icon}
                        />
                        <Text style={styles.ButtonLoginText}>Login with facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.googleLogin}
                    onPress={()=>loginHandler(123)}>
                        <FontAwesome 
                        name="google"
                        size={24}
                        color='#fff'
                        style={styles.Icon}
                        />
                        <Text style={styles.ButtonLoginText}>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={styles.signUp}
                    onPress={()=>loginHandler(12)}
                    >
                        <Text style={styles.ButtonLoginTextDark}>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={styles.signIn}>Already have an account? Sign In</Text>
              </View>
        </LinearGradient>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        margin:0,
        padding:0,
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    },
    loginBackground:{
        margin:0,
        padding:0,
        flex:1,
    },
    centerImage:{
        position:"absolute",
        flex:1,
        alignSelf:"center",
        bottom:0,
    },
    centerImageGradient:{
        flex:1,
        position:"absolute",
        left:0,
        right:0,
        width:null,
        bottom:0,
    },
    buttons:{
        flex:1,
        position:"absolute",
        left:0,
        right:0,
        bottom:40,
    },
    facebookLogin:{
        flexDirection:"row",
        alignSelf:"center",
        color:'#fff',
        padding:20,
        margin:10,
        borderRadius:11,
        backgroundColor:'#5A7BEF',
        width:220,
    },
    googleLogin:{
        flexDirection:"row",
        alignSelf:"center",
        color:'#fff',
        padding:20,
        margin:10,
        borderRadius:11,
        backgroundColor:'#db4437',
        width:220,
    },
    signUp:{
        backgroundColor:'#DEE0E6',
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:'center',
        color:'#fff',
        padding:20,
        margin:10,
        borderRadius:11,
        width:220,
    },
    signIn:{
        flexDirection:"row",
        alignSelf:"center",
        justifyContent:'center',
        marginTop:20,
    },
    ButtonLoginText:{
        alignSelf:'center',
        color:'#fff',
        textTransform:'uppercase',
    },
    ButtonLoginTextDark:{
        color:'#353B50',
        alignSelf:'center',
        textTransform:'uppercase',
    }, 
    Icon:{
        paddingRight:10,
    },
})
