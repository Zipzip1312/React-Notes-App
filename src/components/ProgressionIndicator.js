import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles({
  root: {
    marginTop: '1em'
  },
  infoText: {
    marginBottom: '.5em',
    fontWeight: 500,
    color: '#00000099',
    fontSize: '1.2em'
  }
})

export default function ProgressionIndicator() {
  const classes = useStyles()
  const [progress, setProgress] = useState(25)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0
  //       }
  //       const diff = Math.random() * 10
  //       return Math.min(oldProgress + diff, 100)
  //     })
  //   }, 500)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div className={classes.root}>
      <div className={classes.infoText}>You have 1/4 notes completed</div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}
