import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBC5hp83Nl3OGfmiT5evskrJh6INE0V1uE',
  authDomain: 'web-vanttec.firebaseapp.com',
  projectId: 'web-vanttec',
  storageBucket: 'web-vanttec.appspot.com',
  messagingSenderId: '772723264184',
  appId: '1:772723264184:web:c253d26a2fbb356930424d',
  measurementId: 'G-SJKSDD7FQD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
