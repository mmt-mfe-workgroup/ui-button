import './App.css'
import Button from './components/Button';
import 'tailwindcss/tailwind.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">MFE React + TS + Vite + Tailwind</h1>
        <Button onClick={handleClick} label="Click me" />
      </div>
    </div>
  );
}

export default App
