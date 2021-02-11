
import axios from "axios"
import Constants from "./constant"
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from "react-native";
class Global {

    static getRequest(url) {
        return new Promise(resolve => {
            axios.get(Constants.BASE_URL + url, { headers: { Token: "U3dhcEFwcGxpY2F0aW9u" } })
                .then((res) => {
                    // console.log(res, 'res')
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err, 'err')
                    Alert.alert(err)
                    resolve(err)
                })
        })
    }
    static PutRequest(url) {
        console.log(Constants.BASE_URL + url)
        return new Promise(resolve => {
            axios.put(Constants.BASE_URL + url, {}, { headers: { Token: "U3dhcEFwcGxpY2F0aW9u" } })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err, 'err')
                    Alert.alert(err)
                    resolve(err)
                })
        })
    }

    static postRequest(url, data) {

        return new Promise(resolve => {
            axios.post(Constants.BASE_URL + url, data, { headers: { 'Token': 'U3dhcEFwcGxpY2F0aW9u' } })
                .then((res) => {
                    // console.log(res, 'res')
                    resolve(res)

                })
                .catch((err) => {
                    console.log(err, 'err')
                    Alert.alert(err)
                    resolve(err)
                })

        })
    }
    static postNoti(url, data) {
        console.log(url)
        return new Promise(resolve => {
            axios.post(Constants.BASE_URL + url, data)
                .then((res) => {
                    console.log(res, 'res')
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err, 'err')
                    Alert.alert(err)
                    resolve(err)
                })

        })
    }
    static putRequest(url, data) {
        return new Promise(resolve => {
            axios.put(Constants.BASE_URL + url, data, { headers: { 'Token': 'U3dhcEFwcGxpY2F0aW9u' } })
                .then((res) => {
                    // console.log(res, 'res')
                    resolve(res)
                })

        })
    }
    static saveDataInPhone(key, data) {
        // let data1=JSON.stringify(data);
        AsyncStorage.setItem(key, data)
            .then(() => {
                console.log('data saved')
            })
    }
    static getDataFromPhone(key) {
        return new Promise(resolve => {
            AsyncStorage.getItem(key)
                .then((res) => {
                    //   let data=JSON.parse(res);
                    console.log(res, 'res')

                    resolve(res)
                    // return data
                })
        })
    }
    static removeStorage(key) {
        AsyncStorage.removeItem(key)
            .then(() => {
                console.log('removed')
            })
    }
}
export default Global