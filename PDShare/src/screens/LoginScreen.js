// import React from 'react';
// import { Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

// import styles from '../styles/BasicStyles';


// export default function LoginScreen ({navigation}) {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <TouchableOpacity
//             activeOpacity={0.5}
//             style={styles.buttonStyle}
//             onPress={() => navigation.navigate('HomePageScreen')}
//           >
//             <Text style={styles.buttonTextStyle}>
//               Login
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={() => navigation.navigate('CreateAccountScreen')}
//           >
//             <Text style={styles.buttonTextStyle}>
//               Create Account
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       </SafeAreaView>
//     );
//   }

import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles/styles.js';

import { firebase } from '../firebase/config'


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('CreateAccountScreen')
    }

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('HomePageScreen', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}