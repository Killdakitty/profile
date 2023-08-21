import { Link } from "react-router-dom";

export default function Nav() {



  return (
 

    <div
      className="container: {
        center: true,
      } shadow-2xl  "
    >
      <Link to="/">
        <figure className="pt-2 pl-3 pb-1 flex justify-item-start">
          <img
            className="rounded-full"
            height="80"
            width="90"
            src="https://media.licdn.com/dms/image/C4D03AQGtkYxPYNuD-w/profile-displayphoto-shrink_400_400/0/1578621238505?e=1697673600&v=beta&t=f73znFxjyZIqReEBM8oIM4fyGV319rYhlkvtC3qpnI4"
          />
          {/* <figcaption><b class="uppercase pt-2 pl-3 pb-1 flex justify-item-end ">Alex Hu</b></figcaption> */}
        </figure>
      </Link>

      <div className="flex absolute right-12 top-10 justify-end space-x-10 font-serif italic text-2xl ">
        {/* <div> */}

        <Link to="/">
          <div className="font-sans hover:font-mono">Home</div>
        </Link>

        <Link to="/articles">
          <div className="font-sans hover:font-mono">Articles</div>
        </Link>

        <Link to="/projects">
          <div className="font-sans hover:font-mono">Projects</div>
        </Link>

        <Link to="/contacts">
          <div className="font-sans hover:font-mono">Contacts</div>
        </Link>
      </div>
    </div>
  
  );
}
