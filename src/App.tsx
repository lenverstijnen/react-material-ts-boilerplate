import React from "react"
import { useGlobalStyles } from "./themesAndStyles/css/global"
import { Container } from "@material-ui/core"

function App() {
  useGlobalStyles()
  return (
    <>
      <Container>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          repellendus earum molestiae voluptate nemo fuga consequatur quas
          quisquam reprehenderit reiciendis.
        </p>
      </Container>
    </>
  )
}

export default App
