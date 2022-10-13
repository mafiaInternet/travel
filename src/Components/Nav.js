import { useContext, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import ModelContext from '../content/ModelContext';
import NavContext from '../content/NavContext';

const Nav = () => {
    const {state, dispath} = useContext(NavContext);
    const [open] = useState('open')
    
    return (<div className="nav__main">
        <div className='nav__main__toggle' onClick={() => dispath({type: 'open'})}>
            <FaBars size={30} color="#df2189"></FaBars>
        </div>
        {state ? <div className="navLayer"></div> : ''}
         <div className={state ? 'nav__main__contents open' :  'nav__main__contents close'}>
            <ul className="nav">
                <li class="nav-item">
                    <Link to="./" >Home</Link>
                </li>
                <li class="nav-item">
                <Link to="./about">About</Link>
                </li>
            </ul>
        </div> 
    </div>)
}

export default Nav