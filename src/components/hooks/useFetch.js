import { useState, useEffect } from 'react'

export const useFetch = (url, deps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fetchedData, setFetchedData] = useState(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()

    setIsLoading(true)
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false)
          throw new Error('Failed to fetch..')
        }
        return res.json()
      })
      .then((data) => {
        setFetchedData(data)
        setIsLoading(false)
        setHasError(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
        } else {
          setHasError(true)
          setIsLoading(false)
        }
      })
    return () => {
      return abortController.abort()
    }
  }, [setIsLoading, setHasError, setFetchedData, url, deps])

  return [isLoading, fetchedData, hasError, setHasError]
}
