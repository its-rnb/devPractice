import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className='container' style={styles.container}>
      <h1>Counter: {count}</h1>
      <div className='btn-group' style={styles.buttonGroup}>
        <button className='btn-decrement' onClick={decrement} style={styles.button} disabled={count===0 ? true : false}>
          <Minus size={20} />
          {/* decrement */}
        </button>
        <button className='btn-reset' onClick={reset} style={styles.button} disabled={count===0 ? true : false}>
          <RotateCcw size={20} />
          {/* reset */}
        </button>
        <button className='btn-increment' onClick={increment} style={styles.button}>
          <Plus size={20} />
          {/* increment */}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  buttonGroup: {
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default App;
