import { createSlice } from '@reduxjs/toolkit'
import mockNotes from 'util/mockNotes'

export const slice = createSlice({
  name: 'notes',
  initialState: {
    all: mockNotes,
    searchValue: '',
    activeCategory: 'All',
    showNotesForm: false,
    noteToEdit: undefined
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    activateCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    toggleNotesForm: (state) => {
      state.showNotesForm = !state.showNotesForm
      state.noteToEdit = undefined
    },
    createUpdateNote: (state, action) => {
      const date = generateDate()
      if (!action.payload.id) {
        // create new note
        const id = generateNoteId(state.all)
        const completed = false
        state.all.push({ id, completed, date, ...action.payload })
      } else {
        // update existing note
        state.all.forEach((note, index) => {
          if (note.id === action.payload.id) {
            const updatedNote = { ...note, ...action.payload }
            updatedNote.date = date
            state.all[index] = updatedNote
          }
        })
      }
    },
    editNote: (state, action) => {
      state.noteToEdit = state.all.filter(({ id }) => id === action.payload)[0]
      state.showNotesForm = !state.showNotesForm
    },
    toggleNoteStatus: (state, action) => {
      state.all.forEach((note) => {
        if (note.id === action.payload) {
          // note.date = generateDate()
          note.completed = !note.completed
        }
      })
    },
    deleteNote: (state, action) => {
      state.all = state.all.filter(({ id }) => id !== action.payload)
    }
  }
})

const generateNoteId = (notes) => {
  return (
    Math.max.apply(
      Math,
      notes.map((note) => note.id)
    ) + 1
  )
}

const generateDate = () => new Date().getTime()

export const {
  setSearchValue,
  activateCategory,
  toggleNotesForm,
  createUpdateNote,
  editNote,
  toggleNoteStatus,
  deleteNote
} = slice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value

export default slice.reducer
