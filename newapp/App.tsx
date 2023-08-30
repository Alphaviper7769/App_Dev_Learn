import React from "react";

import { View,
        Text,
        SafeAreaView,
        useColorScheme,
        StyleSheet
       } from 'react-native'


function AppPro(): JSX.Element{

    const isDarkMode = useColorScheme() === 'dark'
    // console.log(isDarkMode)

    return(
        <SafeAreaView>
            <View style = {styles.container}>
                {/* <Text>Test</Text> */}
                <Text style={isDarkMode ? styles.whiteText: styles.darkText}>Hello World</Text>
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create(
    {
        container:{
            // flex:1 ,
            alignItems: 'center',
            justifyContent: 'flex-end'
            
        },
        whiteText:
        {
            color:'#FFFFFF'
        },
        darkText:
        {
            color:'#000000'
        }
    }
)


export default AppPro