import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    firstColor: '',
    secondColor: '',
    spoiler: 'Введите цвета:'
  }
  onInput = (e) => {
    const {id, value} = e.currentTarget
    this.setState({[id]: value})
  }

  colorChange = (e) =>{
    e.preventDefault()
    const {firstColor, secondColor} = this.state
    if (firstColor.trim() && secondColor.trim()){
      let area = ReactDOM.findDOMNode(this.refs.root)
      area.style.background = `linear-gradient(180deg, ${firstColor}, ${secondColor})`
      this.setState({spoiler: 'Введите цвета:'})
    }else{
      this.setState({spoiler: 'Неверный ввод!'})
    }
  }
  render() {
    return (
      <div className='root' ref = {'root'}>
        <form className="App_main_window">
          <h5 className='App_main_window_hedaerText'>{this.state.spoiler}</h5>
          <input
            id='firstColor'
            onChange={this.onInput}
            className='App_main_window_colorInput'
            placeholder='Первый цвет'
            autocomplete="off"
          />
          <input
            id='secondColor'
            onChange={this.onInput}
            className='App_main_window_colorInput'
            placeholder='Второй цвет'
            autocomplete="off"
          />
          <button
            onClick={this.colorChange}
            className='App_main_window_buttonStart'
          >
          Поехали
          </button>
        </form>
      </div>
    );
  }
}
