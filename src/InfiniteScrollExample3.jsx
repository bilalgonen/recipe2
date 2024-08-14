import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'

const InfiniteScrollExample3 = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [index, setIndex] = useState(2)
  const loaderRef = useRef(null)

  const fetchData = useCallback(async () => {
    if (isLoading) return

    setIsLoading(true)
    axios
      .get(`https://dummyjson.com/recipes?limit=6&skip=${index}`)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data.recipes])
      })
      .catch((err) => console.log(err))

    setIndex((prevIndex) => prevIndex + 1)

    setIsLoading(false)
  }, [index, isLoading])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0]
      if (target.isIntersecting) {
        fetchData()
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [fetchData])

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          'https://dummyjson.com/recipes?limit=6&skip=1'
        )
        setItems(response.data.recipes)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {items.map((item, index) => (
          <div>{item.id}</div>
        ))}
      </div>
      <div ref={loaderRef}>{isLoading && <p>Loading...</p>}</div>
    </div>
  )
}

export default InfiniteScrollExample3
