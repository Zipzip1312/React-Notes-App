import { createSlice } from '@reduxjs/toolkit'
import mockNotes from 'util/mockNotes'

export const slice = createSlice({
  name: 'notes',
  initialState: {
    all: [],
    sorted: [],
    searchValue: '',
    activeCategory: 'All',
    showNotesForm: false,
    noteToEdit: undefined,
    pending: true
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    toggleNotesForm: (state) => {
      state.showNotesForm = !state.showNotesForm
      state.noteToEdit = undefined
    },
    createUpdateNote: (state, action) => {
      const date = now()
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
      state.showNotesForm = true
    },
    toggleNoteStatus: (state, action) => {
      state.all.forEach((note) => {
        if (note.id === action.payload) {
          // note.date = now()
          note.completed = !note.completed
        }
      })
    },
    deleteNote: (state, action) => {
      state.all = state.all.filter(({ id }) => id !== action.payload)
    },
    sortAndFilter: (state) => {
      let sortedNotes = [...state.all].sort((a, b) => {
        if (a.completed === b.completed)
          return new Date(b.date) - new Date(a.date)
        return b.completed ? -1 : 1
      })

      if (state.activeCategory !== 'All') {
        sortedNotes = sortedNotes.filter(
          (n) => n.category === state.activeCategory
        )
      }

      if (state.searchValue) {
        sortedNotes = sortedNotes.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(state.searchValue.toLowerCase()) ||
            description.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      }

      state.sorted = sortedNotes
    },
    saveNotes: (state) => {
      localStorage.setItem('notes', JSON.stringify(state.all))
    },
    getNotes: (state) => {
      const savedNotes = localStorage.getItem('notes')
      state.all = savedNotes ? JSON.parse(savedNotes) : []
      state.pending = false
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

const now = () => new Date().getTime()

export const {
  setSearchValue,
  setActiveCategory,
  toggleNotesForm,
  createUpdateNote,
  editNote,
  toggleNoteStatus,
  deleteNote,
  sortAndFilter,
  saveNotes,
  getNotes
} = slice.actions

export default slice.reducer
