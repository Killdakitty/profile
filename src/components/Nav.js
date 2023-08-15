
import { Link } from "react-router-dom"

export default function Nav() {
   
    return (
        <div className="nav">
        <Link to='/' >
        <div>Home</div>
        </Link>
    
    
        <Link to='/articles' >
        <div>Articles</div>
        </Link>

        <Link to='/projects' >
        <div>Projects</div>
        </Link>


        <Link to='/contact' >
        <div>Contact</div>
        </Link>
    
    
    </div>

    )}