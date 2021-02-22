import firebase from "./firebase";
import {useEffect} from "react";

export default function App() {
  useEffect(()=>{
    const messaging = firebase.messaging();
    messaging.requestPermission()
    .then(()=>{
      return messaging.getToken();
    }).then((token)=>{
      console.log('Token : ',token);
    }).catch((error)=>{
      console.log(error.message);
    });

    messaging.onMessage(function (payload){
      console.log(payload.notification.title)
      console.log(payload.notification.body)
    });

  },[])

  return (
      <div></div>
  );
}
