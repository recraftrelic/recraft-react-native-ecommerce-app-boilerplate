import React,{useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './loginStyles3';
import login from './login3.json';
import { images } from '../utilities/images'
import { useRef } from 'react/cjs/react.development';
import { useEffect } from 'react';

const Loginscreen3 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [check, setCheckStatus] = useState(false);
    const [showHidePassword, setShowHidePassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState(true);
    const [internalVal, setInternalVal] = useState('');


    
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);

    const index = [];
    let TextInput1 = useRef(null)
    const lengthInput = 4;

    const onChangeText = () => {
        setInternalVal(internalVal)
    }

    const onEnterText = (password) => {
        setPassword(password);
        if (password.trim().length < 8) {
            setPasswordErrorStatus(true);
        } else {
            setPasswordErrorStatus(false);
        }
    }
    const onEnterText1 = (inputPassword) => {
        setInputPassword(inputPassword)
        if (inputPassword.trim().length < 8) {
            setPasswordErrorStatus(true);
        } else {
            setPasswordErrorStatus(false);
        }
    }

    const onEnterEmail = (value) => {
        console.log(value, "989898")
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (reg.test(value)) {
            setEmailErrorStatus(false);
        } else {
            if (value !== "") {
                setEmailErrorStatus(true);
            }
        }
        setEmail(value);
    }

    const onLogin = () => {

        if (password !== inputPassword) {
            alert("Passwords don't match");
        } else {
            setPasswordErrorStatus(false);
            alert(`${email} + ${password}`);

        }
    };
    useEffect(()=>{
        TextInput1.focus()
    },[])

    return (
        <>
        <View style={styles.container}>
        <View style={styles.headText}>
        <Text style={styles.headerStyle}>
            {login.signUp}
        </Text>
        <Text style={styles.subHeaderStyle}>
        {login.text}
        </Text>
        <Text style={styles.subHeaderStyle1}>
        {login.text1}
        </Text>

        </View>
        </View>

        <View style={styles.main}>
            <KeyboardAwareScrollView enableOnAndroid={true}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            >
            <View style={styles.inputView}>
            <View>
            <TextInput
            ref={( input )=> TextInput1 = input}
            value={internalVal}
            onChangeText={onChangeText}
            secureTextEntry={showHidePassword}
            style={styles.passwordInput}
            maxLength={lengthInput}
            returnKeyType='done'
            keyboardType= 'numeric'
        />
                </View>

                <View style={styles.containerInput}>
                {
                    Array(lengthInput).fill().map((data, index)=> {
                       return <View
                        key={index}
                        style={styles.cellView}>
                        <Text style={styles.cellText}
                        onPress={() => TextInput1.focus()}
                        >
                        {internalVal[index] }
                        </Text>
                        
                        </View>
                    })

                }
             
                
                </View>

                

            </View>

           

            
            <View style={styles.headLogo}>
            <Text style={styles.bottomText}>
            Or Sign in with social media
            
            </Text>

            </View>
            <View style={styles.googleView}>
                <TouchableOpacity style={styles.googlebtn}
                    onPress={onLogin}>
                    <Image source={images.google} style={styles.googleImg}/>
                    <Text style={styles.googleTxt}>
                        {login.google}
                    </Text>

                </TouchableOpacity>
            
            </View>
            <View>
            <TouchableOpacity style={styles.facebokBtn}
                onPress={onLogin}>
            <Image source={images.Facebook} style={styles.facebookImg} />
                <Text style={styles.facebookText}>
                    {login.Facebook}
                </Text>

            </TouchableOpacity>
            
            </View>


        
        </KeyboardAwareScrollView>
            
            </View>
            </>
    );
};

export default Loginscreen3;