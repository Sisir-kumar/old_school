import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'
function Button() {
    return (
        <div>
            <div className="btn-grou " role="group" >
              <Link to="/">
                  <button type="button" className="btn btn-default active">Yearly Course</button>
              </Link>
               <Link to="/mon">
                   <button type="button" className="btn btn-default">Monthly Course</button>
               </Link>
           </div>
        </div>
    )
}

export default Button
