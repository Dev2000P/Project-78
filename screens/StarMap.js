import React, { Component } from 'react';
import {View,TextInput} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
   
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <WebView
                    scalesPageToFit={true}
                    source={{uri:path}}
                    style={{marginTop:20,marginBottom:20}}
                    />

                    <TextInput
                    style={{height:40, borderColor:"gray", borderWidth:1}}
                    placeholder="Enter your latitude"
                    placeHolderTextColor="white"
                    onChangeText={(text)=>{
                        this.setState({
                            latitude:text
                        })
                    }}
                    />
            </View>
        )
    }
}

const {longitude, latitude}=this.state;
const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}.102493&latitude=${latitude}.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`