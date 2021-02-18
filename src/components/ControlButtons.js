import { useState, useEffect } from 'react'
import ControlButton from 'components/ControlButton'
import { useStyles } from 'styles/controlBtn'
import notesCategories from 'util/NotesCategories'

export default function ControlButtons() {
  const classes = useStyles()
  const categories = Object.keys(notesCategories)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    console.log('Active category changed to: ', activeCategory)
  }, [activeCategory])

  return (
    <div className={classes.root}>
      <ControlButton
        name="All"
        type="primary"
        active={activeCategory === 'All'}
        onClick={() => setActiveCategory('All')}
        displayIndicator={false}
      ></ControlButton>

      {categories.map((category, index) => (
        <ControlButton
          name={category}
          type={notesCategories[category]}
          active={activeCategory === category}
          onClick={setActiveCategory}
          key={index}
        ></ControlButton>
      ))}
    </div>
  )
}
