const firebaseConfig = {
  apiKey: "AIzaSyA1wALsfQ7oSWh_kow6u4Pc2WFgPFalc3M",
  authDomain: "travelmore-c7cf4.firebaseapp.com",
  projectId: "travelmore-c7cf4",
  databaseURL: "https://travelmore-c7cf4-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "travelmore-c7cf4.appspot.com",
  messagingSenderId: "497327407427",
  appId: "1:497327407427:web:8b630f9de34feae82c2ff6",
  measurementId: "G-S9834VE6CV",
};

firebaseConfig.initializeApp(firebaseConfig);

randomUUID = () => {
  return String("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
    /[xy]/g,
    (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;

      return value.toString(16);
    }
  );
};
