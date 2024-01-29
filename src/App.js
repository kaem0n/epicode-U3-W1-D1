import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

const App = function () {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>U3-W1-D1 - First React App</p>
        <div className="flex-mantra">
          <ButtonComponent text="First" />
          <ButtonComponent text="Second" />
          <ButtonComponent text="Third" />
        </div>
        <div className="flex-mantra">
          <ImageComponent url="https://placekitten.com/200" alt="cat-1" />
          <ImageComponent url="https://placekitten.com/300" alt="cat-2" />
          <ImageComponent url="https://placekitten.com/500" alt="cat-3" />
        </div>
      </main>
    </div>
  )
}

export default App
