// @ts-ignore
import * as params from '@params';


// const yesticketBaseUrl = "https://www.yesticket.org/api/v2/events.php";
// const organizer = "14";
// const type = "all";
// const key = "6bd5501ae758318bb5195e2b";
const improvBerlinUrl = "https://api.improvberlin.com/events/yesticket/liber"

interface YesTicketEvent {
    event_name: string;
    event_description: string;
    event_datetime: string;
    yesticket_booking_url: string;
    event_picture_url: string;
    location_city: string;
    location_name: string;

}


const fetchEvents: () => Promise<Array<YesTicketEvent>> = async () => {
    // const yesTicketUrl = `${yesticketBaseUrl}?organizer=${organizer}&key=${key}&type=${type}`;
    const yesTicketUrl = improvBerlinUrl;

    const res = await fetch(yesTicketUrl);
    return await res.json();
}

const eventItem = (ev: YesTicketEvent) => {
    const name = document.createElement("div");
    name.innerText = ev.event_name;

    const date = document.createElement("div");
    date.className = "event-date"
    const theDate = new Date(ev.event_datetime.replace(" ", "T"));
    date.innerText = theDate.toLocaleDateString("DE", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

    const location = document.createElement("div");
    location.innerText = ev.location_name + ", " + ev.location_city
    const ticketLink = document.createElement("a");
    ticketLink.innerText = "Tickets";
    ticketLink.className = "event-link"
    ticketLink.setAttribute("href", ev.yesticket_booking_url);
    ticketLink.setAttribute("target", "_blank");

    const eventLeft = document.createElement("div");
    eventLeft.className = "grow"
    eventLeft.appendChild(date);
    eventLeft.appendChild(name);
    eventLeft.appendChild(location);

    const eventRight = document.createElement("div");
    eventRight.appendChild(ticketLink);

    const event = document.createElement("div");
    event.className = "event mb-8 flex";
    event.appendChild(eventLeft);
    event.appendChild(eventRight);

    return event;

}

const displayEvents = async () => {
    const events = await fetchEvents();
    console.log(events);
    const eventListEl = document.getElementById("event-list");
    if (eventListEl) {
        events.forEach(ev => {
            eventListEl.appendChild(eventItem(ev));
        })
    }

    const nextEvent = document.getElementById("next-event");
    if (nextEvent) {
        nextEvent.appendChild(eventItem(events[0]));
    }

};

displayEvents();