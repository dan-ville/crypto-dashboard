import CurrencyConverter from "./components/CurrencyConverter"
import NewsFeed from "./components/NewsFeed"

const App = () => {
  return (
    <div className="app">
      <div className="grid">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  )
}

export default App
