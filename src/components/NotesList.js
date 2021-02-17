import Grid from '@material-ui/core/Grid';
import Note from './Note'

export default function NotesList() {
  return (
    <Grid item container>
      {notes.map(note =>
        <Grid item xs={12} sm={6} style={{ outline: "1px solid #ccc", marginBottom: "1em" }}>
          <Note data={note} key={note.id} />
        </Grid>
      )}
    </Grid>
  )
}

const notes = [{
  "id": 1,
  "title": "sagittis nam",
  "description": "porttitor pede justo eu massa donec dapibus duis at velit eu",
  "category": "Work",
  "completed": false,
  "date": "2020-12-07T12:39:57Z"
}, {
  "id": 2,
  "title": "ornare consequat lectus in",
  "description": "luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
  "category": "Home",
  "completed": false,
  "date": "2020-08-02T11:45:43Z"
}, {
  "id": 3,
  "title": "integer ac neque",
  "description": "dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit",
  "category": "Personal",
  "completed": true,
  "date": "2020-07-26T09:27:58Z"
}, {
  "id": 4,
  "title": "in purus eu magna",
  "description": "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices",
  "category": "Work",
  "completed": false,
  "date": "2020-12-29T21:35:29Z"
}, {
  "id": 5,
  "title": "neque aenean auctor gravida",
  "description": "id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
  "category": "Personal",
  "completed": true,
  "date": "2020-05-09T07:14:59Z"
}, {
  "id": 6,
  "title": "justo in blandit",
  "description": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa",
  "category": "Home",
  "completed": false,
  "date": "2020-06-03T04:44:00Z"
}, {
  "id": 7,
  "title": "libero rutrum",
  "description": "scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
  "category": "Home",
  "completed": false,
  "date": "2020-12-25T09:40:01Z"
}, {
  "id": 8,
  "title": "turpis a",
  "description": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar",
  "category": "Home",
  "completed": false,
  "date": "2020-09-22T13:12:17Z"
}, {
  "id": 9,
  "title": "ipsum primis",
  "description": "consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
  "category": "Personal",
  "completed": false,
  "date": "2020-06-19T01:47:51Z"
}, {
  "id": 10,
  "title": "sagittis nam",
  "description": "proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut",
  "category": "Personal",
  "completed": false,
  "date": "2021-01-27T05:46:34Z"
}]
