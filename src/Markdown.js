import React from 'react';
import marked from 'marked'

class Markdown extends React.Component{
  constructor(props) {
    super(props);
    marked.setOptions({
      glf:true,
      tables:true
    });
  }

  render() {
    console.log()
    const markedHTML ='set';
    return(
      <div dangerouslySetInnerHTML={{__html:markedHTML}}>
      </div>
    )
  }
}

export default marked;