import React, { useEffect } from "react"

export default function PageNotFound () {
  useEffect(() => {
    if (typeof document !== "undefined")
      document.documentElement.scrollTop = 0;
  }, [])

  return (
    <>404</>
  )
}
