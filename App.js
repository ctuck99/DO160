import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Power Input Tests</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    const power_input_tests = [
      { test: 'Voltage and Frequency'},
      { test: 'Voltage Modulation'},
      { test: 'Frequency Modulation'},
      { test: 'Momentary Power Interruptions'},
      { test: 'Momentary Power Interruptions + Additional Requirement'},
      { test: 'Normal Surge Voltage'},
      { test: 'Normal Frequency Transients'},
      { test: 'Normal Frequency Variations'},
      { test: 'Voltage DC Content'},
      { test: 'Voltage Distortion'},
      { test: 'Abnormal Voltage and Frequency Limits in Steady State'},
      { test: 'Momentary Undervoltage Operation'},
      { test: 'Abnormal Surge Voltage'},
      { test: 'Abnormal Frequency Transients'},
      { test: 'Abnormal Frequency Transients + Test 3'},
      { test: 'Abnormal Frequency Variations'},
      { test: 'Loss of Phase Input'},
    ]
    return (
      <div>
        {power_input_tests.map(test_name => (
          <p>{test_name.test}</p>
        ))}
      </div>
    );
  }
}

export default App;