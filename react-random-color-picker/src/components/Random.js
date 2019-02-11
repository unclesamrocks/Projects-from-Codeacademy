import React from 'react';
import Button from './Button';

class Random extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        color: [102, 32, 53],
        newObj: {
          someProps: 123,
          innerObj: {
            someInnerPropos: 321
          }
        },
        anotherObj: {}
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    componentDidMount() {
      this.applyColor();
    }
  
    componentDidUpdate(prevProps, prevState) {
      this.applyColor();
    }
  
    formatColor(ary) {
      return 'rgb(' + ary.join(', ') + ')';
    }
  
    isLight() {
      const rgb = this.state.color;
      return rgb.reduce((a,b) => a+b) < 127 * 3;
    }
  
    applyColor() {
      const color = this.formatColor(this.state.color);
      document.body.style.background = color;
    }
  
    chooseColor() {
      const random = [];
      for (let i = 0; i < 3; i++) {
        random.push(Math.floor(Math.random()*256));
      }
      return random;
    }
  
    handleClick(){
      this.setState({ color: this.chooseColor() });
    }
  
    render() {
      return (
        <div style={{ textAlign: 'center' }}>
          <h1 className={this.isLight() ? 'white' : 'black'}>
            Your color is [{this.formatColor(this.state.color)}]!
          </h1>
          <Button light={this.isLight()} onClick={this.handleClick} />
          <pre style={{ margin: '0 auto', width: 300, textAlign: 'left' }} className={this.isLight() ? 'white' : 'black'}> {JSON.stringify(this.state, null, 2)}</pre>
        </div>
      );
    }
  }
  
  export default Random;