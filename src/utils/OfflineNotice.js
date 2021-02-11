import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
// import NetInfo from "@react-native-community/netinfo";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>Internet Connection Offline</Text>
        </View>
    );
}


class OfflineNotice extends PureComponent {

    state = {
        isConnected: false
    };
    componentDidMount() {

        // NetInfo.addEventListener().then(state => {
        NetInfo.addEventListener(state => {
            console.log("statestate", state)
            this.setState({ isConnected: state.isConnected })
        });
    }



    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: width
    },
    offlineText: { color: '#fff' }
});




export default OfflineNotice;