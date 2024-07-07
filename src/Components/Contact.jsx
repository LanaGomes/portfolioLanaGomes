import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { useState } from "react";
import Message from "./Message";
import { useTranslation } from "react-i18next";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "Messages");

//get the collection data
getDocs(colRef)
  .then((snapshot) => {
    let messages = [];
    snapshot.docs.forEach((doc) => {
      messages.push({ ...doc.data(), id: doc.id });
    });
  })

  .catch((err) => {
    console.log(err.message);
  });

function Contact() {
  const { t } = useTranslation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleOnChange(event) {
    //console.log(event.target.value);
    //console.log(event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
    if (event.target.value <= 3) {
      this.setState({
        [event.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    addDoc(colRef, user)
      .then(() => {
        setUser({ name: "", email: "", message: "" });
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }

  return (
    <div id="contact" className="wrapperContact">
      {ShowSuccessMessage && <Message type="success" msg={t("success_msg")} />}
      <h1>{t("contato")}</h1>
      <form onSubmit={handleSubmit} className="wrapperForm add">
        <label>
          {t("nameLabel")}
          <input
            value={user.name}
            onChange={handleOnChange}
            name="name"
            type="text"
            required
            minLength="3"
            maxLength="80"
            placeholder={t("insira_nome")}
          ></input>
        </label>
        <label>
          E-mail
          <input
            value={user.email}
            onChange={handleOnChange}
            name="email"
            type="email"
            minLength="10"
            maxLength="50"
            required
            placeholder={t("insira_email")}
          ></input>
        </label>
        <label>
          {t("message")}
          <textarea
            value={user.message}
            onChange={handleOnChange}
            name="message"
            id="message"
            type="text"
            minLength={10}
            maxLength={200}
            placeholder={t("insira_message")}
            required
          ></textarea>
        </label>
        <button className="sentButton">{t("enviar")}</button>
      </form>
    </div>
  );
}
export default Contact;
