import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

const App = function () {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mb-0">U3-W1-D1 - First React App</p>
        <p className="mt-0">
          <a
            href="https://github.com/kaem0n/epicode-U3-W1-D1"
            className="App-link"
          >
            Link to GitHub Repository
          </a>
        </p>
        <div className="flex-mantra">
          <ButtonComponent text="First" />
          <ButtonComponent text="Second" />
          <ButtonComponent text="Third" />
        </div>
        <div className="flex-mantra">
          <ImageComponent url="https://placekitten.com/200" alt="cat-1" />
          <ImageComponent url="https://placekitten.com/300" alt="cat-2" />
          <ImageComponent url="https://placekitten.com/500" alt="cat-3" />
          <ImageComponent url="https://placekitten.com/700" alt="cat-4" />
          <ImageComponent url="https://placekitten.com/900" alt="cat-5" />
        </div>
      </main>
    </div>
  )
}

export default App
