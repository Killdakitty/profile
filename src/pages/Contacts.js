// import ContactForm from "../components/Contactform"
// export default function Contacts() {
   
//     return (
//         <div>
//     <h2>contacts</h2>
//  import logo from "./logo.svg";
// import "./App.css";
import { useEffect } from "react";
import ContactForm from "../components/Contactform";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
     
      
    <div className="App">

      <header className="App-header">
      <img  src={"https://marketplace.canva.com/EAFSUH0EweU/1/0/800w/canva-black-elegant-personal-linkedin-banner-JvFaCtUGxLE.jpg"} alt="Let's Connect"></img>

        <div className="py-6">

            
          <ContactForm />
        </div>
      </header>
    </div>
  );
}

export default App;


    //     </div>
    
    // )}