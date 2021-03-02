import { saveNotes, sortAndFilter } from 'redux/notesReducer'

const notesMiddleware = (store) => (next) => (action) => {
  next(action)

  const notesMutations = [
    'notes/createUpdateNote',
    'notes/toggleNoteStatus',
    'notes/deleteNote'
  ]

  const sortAndFilterActions = [
    'notes/getNotes',
    'notes/setSearchValue',
    'notes/setActiveCategory',
    'notes/mockNotes'
  ].concat(notesMutations)

  notesMutations.includes(action.type) && store.dispatch(saveNotes())
  sortAndFilterActions.includes(action.type) && store.dispatch(sortAndFilter())
}

export default notesMiddleware
