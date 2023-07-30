import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Footer() {
const [text] = useTypewriter({
    words : ["Jemy" , "Front End Developer"],
    loop : {} ,
})

  return (
<div className="footer">
<p> Made By  {text}</p>
</div>
  )
}
