import React from 'react';
import marked from 'marked';

class Markdown extends React.Component{
  constructor(props) {
    super(props);
    marked.setOptions({
      gfm:true,
      tables:true
    });
  }

  render() {
    const markedHTML =marked(this.props.children);
    return(
      <div className="control" dangerouslySetInnerHTML={{__html:markedHTML}}>
      </div>
    )
  }
}

export default Markdown;