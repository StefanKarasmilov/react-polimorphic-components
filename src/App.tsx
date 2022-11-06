import './App.css'

import React, { useRef } from 'react'
import { Text } from './exercise/Text'

const Em = ({ children }: { children: React.ReactNode }) => (
  <em style={{ background: 'yellow', color: 'black' }}>{children}</em>
)

function App() {
  const ref = useRef<HTMLHeadingElement | null>(null)

  return (<div>
    <Text as="h1" ref={ref}>No As text</Text>
    <Text as="h1">Hello Code Sandbox</Text>
    <Text as="h2" color="green">Start editing to see some magic happen!</Text>
    <Text as="a" href="https://www.google.com">Hello world</Text>

    <br />

    <Text as={Em}>This is important.</Text>
  </div>)
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //
  //       <Text as="div">Hello Text world</Text>
  //
  //       <Text as="h1">
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </Text>
  //
  //       {/* Example: passing a specific component prop */}
  //       <Text color="violet">Hello world</Text>
  //
  //       {/* Example: the 'as' prop can also take in a custom component*/}
  //       <Text as={Em}>This is important</Text>
  //
  //       <Text
  //         as="a"
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </Text>
  //     </header>
  //   </div>
  // );
}

export default App
