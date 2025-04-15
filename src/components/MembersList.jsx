import React from 'react'
import Memeber from './Member'
import '../style/MembersList.css'
function MembersList() {
    const members = [
        {name: "Carolien Blaeme", checked:false},
        {name: "Sun Jun", checked:true},
        {name: "Song Bao", checked:false},
        {name: "Olivia Arribas",checked:true },
        {name: "Bonginkosi Mdladlana", checked:false},
        {name: "Arina Belomestnykh", checked:true},
        {name: "Jacqueline Likoki",checked:true},
      ]
  return (
    <div>
        <ul>
        {members.map((member)=>(
            <Memeber member={member} />
        ))}
         </ul>
    </div>
  )
}

export default MembersList
