import firebase from "firebase";
import 'firebase/firestore'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_Key,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    senderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials);
        // funcao que inicializa o firebase
    }
    console.log("Firebase foi iniciado com sucesso!");
}