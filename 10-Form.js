import React from 'react';

export default class Form extends React.Component {
  // Setting defaultValue for 'value' of "input" tag
  state = {
    title: 'JavaScript',
    text_description: 'JavaScript is awesome',
    library: 'React',
    isChecked: true,
  }

  handleChange = (e) => {
    // how to access value dynamically (react er docs a ektu ase eita niye, tai eikhane dekhano)
    /* this.setState({
      [e.target.value]: e.target.value
    }); */
      
    // console.log(e.target.value);
    if(e.target.type === 'text') {
      this.setState({
        title: e.target.value
      });
    } else if(e.target.type === 'textarea') {
      this.setState({
        text_description: e.target.value
      });
    } else if(e.target.type === 'select-one') {
      this.setState({
        library: e.target.value
      });
    } else if(e.target.type === 'checkbox') {
      this.setState({
        isChecked: e.target.checked  // here, value nai, ase checked
      });
    } else {
      // console.log(e.target.type);
      console.log('nothing here');
    }
  }

  submitHandler = (e) => {
    const {title, text_description, library, isChecked} = this.state;
    e.preventDefault();
    console.log(title, text_description, library, isChecked);
  }

  render() {
    const {title, text_description, library, isChecked} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="title" type="text" placeholder='write anything!' value={title} onChange={this.handleChange} />
          {/* value='something' dle react vabe j or haat a full control chole jaay, so we can't edit the value on browser */}
          <br /><br />
          <textarea name="text" value={text_description} onChange={this.handleChange}></textarea>
          <br /><br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="jQuery">jQuery</option>
          </select>
          <br /><br />
          <input type="checkbox" checked={isChecked} onChange={this.handleChange} />
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}