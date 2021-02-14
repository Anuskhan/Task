import { Alert } from "react-native";
import messaging, { AuthorizationStatus } from '@react-native-firebase/messaging';

export const Notification = async () => {
    const result = await messaging().registerDeviceForRemoteMessages();


    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        this.messageListener = await messaging().onMessage(async message => {
            console.log("message received!!!", message)
        })
        messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });


        console.log('Authorization status:', authStatus);

        let token = await messaging().getToken()
        console.log('FCM token', token)
        await messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

        });
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification,
            );
        });
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                    setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
                }

            });
    }
}