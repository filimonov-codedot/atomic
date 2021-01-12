import React from "react"

const childrenContext = React.createContext({
  openContactModal: () => {},
  openMenu: () => {},
})

export default childrenContext
