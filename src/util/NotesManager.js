import mockNotes from 'util/mockNotes'

class NotesManager {
  constructor(mockNotes = false) {
    this.notes = mockNotes ? this.mockNotes : this.savedNotes
  }

  getNotes() {
    return this.notes
  }

  get savedNotes() {
    return []
  }

  get mockNotes() {
    return mockNotes
  }
}

const notesManager = new NotesManager(true)

export default notesManager
