import React from 'react'
import '../style/Member.css'
import check from '../icons/check-mark.png'
import oval from '../icons/oval.png'
import userChecked from '../icons/user.png'
import userUnchecked from '../icons/userUnchecked.png'
function Memeber({member}) {
  return (
        <li style={{color: !member.checked?'#b0b0b0':'' }}>
            <span className='member-icon'>
                <img height={20} width={20} src={!member.checked ? userUnchecked : userChecked} alt="user" /></span>
            <span>
              {member.name}
            </span>
            <span className='member-status'>
                {member.checked ?
                <img height={20} width={20} src={check} alt="check" /> : <img height={20} width={20} src={oval} alt='oval' />
                }
            </span>
        </li>
  )
}

export default Memeber