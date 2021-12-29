//npx react-native start
//npx react-native run-ios
//arch -x86_64 pod install

//xed ios ##opens project in xcode

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';

// we will use these two screens later in the Navigator
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





// import 'react-native-gesture-handler';
// import React, { useEffect, useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
// import {decode, encode} from 'base-64'
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }

// const Stack = createStackNavigator();

// export default function App() {

//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState(null)

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         { user ? (
//           <Stack.Screen name="Home">
//             {props => <HomeScreen {...props} extraData={user} />}
//           </Stack.Screen>
//         ) : (
//           <>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Registration" component={RegistrationScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }