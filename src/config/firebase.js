// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDataBase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_om9e0BidLaWtfOSx31knonTz0l5tCo",
  authDomain: "preparetecapi-5d1fc.firebaseapp.com",
  databaseURL: "https://preparetecapi-default-rtdb.firebaseio.com",
  projectId: "preparetecapi",
  storageBucket: "preparetecapi.appspot.com",
  messagingSenderId: "36552924061",
  appId: "1:36552924061:web:cd4e7809a74de6c6df6d74"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase

function adicionarDadosAdmin(userId, nomeProfessor, cpfProfessor, formacaoProfessor){
const db = getDataBase();
const reference = ref(db, 'admin/' + userId);

set(reference, {

  nome: nomeProfessor,
  cpf: cpfProfessor,
  formacao: formacaoProfessor,

})
}


adicionarDadosAdmin("Dalva", "502.133.198-10", "Quimica");