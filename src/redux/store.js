import { configureStore } from '@reduxjs/toolkit'
import notesReducer from 'redux/notesReducer'
import notesMiddleware from 'redux/middleware/notesMiddleware'

export default configureStore({
  reducer: {
    notes: notesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesMiddleware)
})
