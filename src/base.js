import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDtZhMp81Cg6TNTNkvB8NphPKPSK-Cegmo",
    authDomain: "noteherder-d3389.firebaseapp.com",
    databaseURL: "https://noteherder-d3389.firebaseio.com",
    projectId: "noteherder-d3389",
    storageBucket: "noteherder-d3389.appspot.com",
    messagingSenderId: "205137747099"
})

const db = database(app)

export default Rebase.createClass(db)