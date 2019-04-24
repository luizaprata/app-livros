export const API_URL = process.env.REACT_APP_API || 'http://localhost:5000/'

export const IS_DEV_ENV =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'
