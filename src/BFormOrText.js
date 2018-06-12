// props: textClass text placeholder isTextarea
import React from 'react'
import BInput from './BInput'
import Markdown from './Markdown';

class BFormOrText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: false,
      text: props.text
    }
  }

  resetInput = () => {
    this.setState(
      (state) => ({
        text: this.props.text
      })
    )
  }

  toggleForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible
    });
    this.resetInput();
  }

  setText = () => {
    this.props.setText(this.state.text);
    this.toggleForm();
  }

  handleText = (event) => {
    this.setState({
      text:event.target.value
    }) 
  }

  render() {
    const isFormVisible = this.state.isFormVisible;
    const text = (
      <Markdown className={this.props.textClass} onClick={this.toggleForm} contents={this.props.text}>{this.props.text}</Markdown>
    )
    let inputForm = (
      <div className="field">
        <BInput
          placeholder={this.props.placeholder}
          onChange={this.handleText}
          isTextarea={this.props.isTextarea}
          value={this.state.text}
        />
        <div className="control is-grouped">
          <button className="button is-primary" onClick={this.setText}>저장</button>
          <button className="button is-text" onClick={this.toggleForm}>취소</button>
        </div>
      </div>
    )
    return (
      <div className="BFromOrButton">
        {
          isFormVisible ? inputForm : text
        }
      </div>
    );
  }
}

export default BFormOrText;