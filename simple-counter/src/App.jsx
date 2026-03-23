import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div style={styles.buttonGroup}>
        <button onClick={decrement} style={styles.button} disabled={count===0 ? true : false}>
          <Minus size={20} />
          {/* decrement */}
        </button>
        <button onClick={reset} style={styles.button} disabled={count===0 ? true : false}>
          <RotateCcw size={20} />
          {/* reset */}
        </button>
        <button onClick={increment} style={styles.button}>
          <Plus size={20} />
          {/* increment */}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default App;
