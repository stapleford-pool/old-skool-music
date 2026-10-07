// Old Skool DJ — shared Firebase connection
// Used by every page in the app, so you only set this up once.
//
// HOW TO FILL THIS IN:
// 1. Go to https://console.firebase.google.com and open "old-skool-music"
// 2. Click the cog (Project settings) → General → scroll to "Your apps"
// 3. If there's no web app yet, click the </> icon to add one
// 4. Copy the values from the "firebaseConfig" it shows you into the object below

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiHP9atkoCsksddBXbPE6HKknIoG6vyJo",
  authDomain: "old-skool-music.firebaseapp.com",
  projectId: "old-skool-music",
  storageBucket: "old-skool-music.firebasestorage.app",
  messagingSenderId: "868859584580",
  appId: "1:868859584580:web:7a76d9209a47c117ee1c11"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Name of the Firestore collection that holds every track
export const TRACKS_COLLECTION = "tracks";
