import React from 'react'

export default function Button(props) {

    const sty1={height:props.h,width:props.w,backgroundColor:props.bg}

  return (
    <button style={sty1}  >{props.value}</button>
  )


}
