import request from 'superagent'

const CALENDAR_ID = '2k2ndlkd1d7qufcompmprsdhgg@group.calendar.google.com'
const API_KEY = 'AIzaSyD049iidIbbHvgf6Yln-eIfsPi8qi-tZCk'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
    request
        .get(url)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: new Date(event.start.date || event.start.dateTime),
                        end: new Date (event.end.date || event.end.dateTime),
                        title: event.summary,
                    })
                })
                callback(events)
            }
        })
}