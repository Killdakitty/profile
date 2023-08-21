import { useEffect } from "react";
export default function Project() {
   
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

<h2>Project</h2>
<h3>Coming SOON</h3>
</header>
        </div>
       
        
    )}