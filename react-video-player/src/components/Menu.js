import React from 'react';

export class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: 'radio-1'
        }
        this.handleSrc = this.handleSrc.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSrc(e){
        const src = e.target.value;
        this.props.updateSrc(src);
    }

    handleChange(e){
        this.setState({
            checked: e.target.dataset.name
        })
    }

    handleChecked(dataName){
        return this.state.checked === dataName ? true : false;
    }
  
    render() {
    return (
      <form onChange={this.handleSrc}>
        <input type="radio" name="src" value="fast" data-name='radio-1' checked={this.handleChecked('radio-1')} onChange={this.handleChange} /> fast
        <input type="radio" name="src" value="slow" data-name='radio-2' checked={this.handleChecked('radio-2')} onChange={this.handleChange}  /> slow
        <input type="radio" name="src" value="cute" data-name='radio-3' checked={this.handleChecked('radio-3')} onChange={this.handleChange}  /> cute
        <input type="radio" name="src" value="eek" data-name='radio-4' checked={this.handleChecked('radio-4')} onChange={this.handleChange}  /> eek
      </form>
    );
  }
}