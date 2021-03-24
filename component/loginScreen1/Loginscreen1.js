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

import { styles } from './loginStyles';
import login from './login.json';
import { images } from '../utilities/images'

const Loginscreen1 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheckStatus] = useState(false);
    const [showHidePassword, setShowHidePassword] = useState(true);
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(false);
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);

    const onEnterText = (password) => {
        setPassword(password);
        if (password.trim().length < 8) {
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
        if (email == '') {
            setEmailErrorStatus(true);
        }
        else {
            setEmailErrorStatus(false);
        }
        if (password == '') {
            setPasswordErrorStatus(true);
        }
        else {
            setPasswordErrorStatus(false);
            alert(`${email} + ${password}`);

        }
    };

    return (
        <>
        <View style={styles.container}>
        <View style={styles.headText}>
        <Text style={styles.headName}>
            {login.headername}
        </Text>
        <Text style={styles.headerStyle}>
            {login.signIn}
        </Text>
        <Text style={styles.subHeaderStyle}>
        {login.text}
        </Text>
        <Text style={styles.subHeaderStyle1}>
        {login.text1}
        </Text>

        </View>
            </View>

            <View style={{
                flex: 0.7,
                top: 20,
            }}>
            <KeyboardAwareScrollView enableOnAndroid={true}
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
        >
               

            <View style={styles.inputView}>

                <View>
                    <TextInput
                        value={email}
                        onChangeText={(email) => onEnterEmail(email)}
                        placeholder='Enter your email'
                        style={styles.emailInput}
                    />
                    {emailErrorStatus == true ? (
                        <Text style={styles.errorMessage} >
                            * Please include an '@' in the email address.
                        </Text>
                    ) : null}


                    
                </View>

                <View>
                    <TextInput
                        value={password}
                        onChangeText={(password) => onEnterText(password)}
                        placeholder='password.'
                        secureTextEntry={showHidePassword}
                        style={styles.passwordInput}
                    />
                    {passwordErrorStatus == true ? (
                        <Text style={styles.errorMessage} >
                            * Password should be minimum 8 characters.
                        </Text>
                    ) : null}
                    
                    <TouchableOpacity
                        onPress={() => setShowHidePassword(!showHidePassword)}
                        style={styles.checkBoxbtn}
                        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                    >
                    {
                        showHidePassword ?
                            <Image
                                source={images.eye}
                                style={styles.eye}
                            />
                            :
                            <Image
                                source={images.ic_ad_view}
                                style={styles.eye1}

                            />
                    }
                        

                    </TouchableOpacity>


                </View>

            </View>

            <View style={styles.checkBoxView}>
                <TouchableOpacity style={styles.checkBoxTouch}
                    onPress={() => setCheckStatus(!check)}
                >
                </TouchableOpacity>

                <Text style={styles.forgote}>
                    {login.forgote}
                </Text>

            </View>

            <View style={styles.signInBtnView}>
                <TouchableOpacity style={styles.signInBtn}
                    onPress={onLogin}

                >
                    <Text style={styles.signInText}>
                        {login.signIn}
                    </Text>

                </TouchableOpacity>

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

export default Loginscreen1;