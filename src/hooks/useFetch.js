import { useState, useEffect } from 'react'

export default function useFetch(url) {
  //   console.log('first url:', url)
  const [items, setItems] = useState(null)
  const [loading, setLoading] = useState(false)
  const [Error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    setError(false)
    const ctrl = new AbortController()
    fetch(url, { signal: ctrl.signal })
      .then((response) => {
        if (!response.ok) throw 'API Failed'
        return response.json()
      })
      .then((json) => {
        setItems(json)
        setError(false)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setError(true)
        setItems([])
        setLoading(false)
      })
    return () => {
      ctrl.abort()
    }
  }, [url])
  return { items, loading, Error }
}
