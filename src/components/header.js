import React from 'react'
import {Link} from 'react-router-dom'

 const Header = () =>{
   return(
     <header style={{fontFamily: 'Monoton',
     textAlign: 'center',
     fontSize: '33px',
     borderBottom: '1px solid #2196f3',
     color: '#949494'}}>
        <Link to="/">Music Db</Link>
     </header>
   )
 }

export default Header
