import { configureStore } from '@reduxjs/toolkit'
import notesReducer from 'redux/notesReducer'

export default configureStore({
  reducer: {
    notes: notesReducer
  }
})
