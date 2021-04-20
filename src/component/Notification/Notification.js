
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from '@react-native-community/push-notification-ios';

 class Notification  {
     configure =()=>{
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              // console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
              // console.log("NOTIFICATION:", notification);
          
              // process the notification
          
              // (required) Called when a remote is received or opened, or local notification is opened
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
          
            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
              // console.log("ACTION:", notification.action);
              // console.log("NOTIFICATION:", notification);
          
              // process the action
            },
          
            // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
          
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
          
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
          
            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
            requestPermissions: Platform.OS === 'ios'
          });
     }
     PushChancel =(chancel)=>{
        PushNotification.createChannel(
            {
              channelId: chancel, // (required)
              channelName: "My channel", // (required)
              channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
              playSound: true, // (optional) default: true
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: 4. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );

     }
     PushNotifi =(chancel,judul,pensan, option={})=>{
    //    console.log('option===',option);
        PushNotification.localNotification({
            channelId: chancel,
            title: judul, // (optional)
            message: pensan, // (required)
            playSound: option.playSound || false, // (optional) default: true
            // soundName:"nhacchuong.net_meo-meo-meo-meo-meo-tran-duc-bo.mp3",
            // option.soundName || 'default',
            vibrate:option.vibrate || false,
            vibration : option.vibration || 500,
            largeIconUrl: "https://i.imgur.com/8OMrXbH.png",
            largeIcon:"ic_launcher_share"
        })

     }
     PushNotifiContent =(chancel,judul,pensan)=>{
        PushNotification.localNotificationSchedule({
            //... You can use all the options from localNotifications
            channelId: chancel,
            message: pensan, // (required)
            date: new Date(Date.now() + 60 * 1000), // in 60 secs
            title : judul
          });
     }
 }
 export  const notification = new Notification();
