// props = {placeholder, onChange, isTextarea value}
import React from 'react'

function BInput (props) {
  const textarea = (<textarea className="textarea" placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>);
  const inputText = (<input className="input" type="text" placeholder={props.placeholder} onChange={props.onChange} value={props.value}/>)
  return(
    <div className="control">
      {
        props.isTextarea ? textarea : inputText
      }
    </div>
  );
}

export default BInput;