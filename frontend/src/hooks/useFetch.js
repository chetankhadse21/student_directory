import { useState, useEffect } from 'react'
import axiosClient from '../api/axiosClient'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    axiosClient.get(url)
      .then(res => mounted && setData(res.data))
      .catch(err => mounted && setError(err))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [url])

  return { data, loading, error }
}
