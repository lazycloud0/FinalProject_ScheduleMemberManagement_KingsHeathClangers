"use client";

// Import React from the 'react' package.
import React from "react";

// Import FullCalendar from '@fullcalendar/react', which is the React wrapper for FullCalendar.
import FullCalendar from "@fullcalendar/react";

// Import necessary plugins (`dayGridPlugin`, `timeGridPlugin`, `interactionPlugin`, `bootstrap5Plugin`) from their respective packages.
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

// Import Bootstrap CSS and Bootstrap Icons CSS for styling.
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import a CSS module (`styles`) for custom styling of the calendar component.
import styles from "./calendar.module.css";

// A placeholder array of events to be displayed on the calendar.
const eventsPlaceholder = [
  { title: "Event 1", date: "2024-05-14", time: "10:00" },
  { title: "Event 2", date: "2024-05-15", time: "10:00" },
  { title: "Event 3", date: "2024-05-16", time: "10:00" },
  { title: "Event 4", date: "2024-05-16", time: "10:00" },
  { title: "Event 5", date: "2024-05-19", time: "10:00" },
  { title: "Event 6", date: "2024-05-20", time: "10:00" },
  { title: "Event 7", date: "2024-05-23", time: "10:00" },
];

// Define a functional component named `CalendarComponent`.
function CalendarComponent() {
  // Return a JSX structure that represents the calendar UI.
  return (
    <div className={styles.calendar}>
      {/* Render the FullCalendar component with specific configurations and plugins */}
      <FullCalendar
        // Plugins to enable specific functionalities
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          bootstrap5Plugin,
        ]}
        // Specifies the initial view of the calendar
        initialView="dayGridMonth"
        // Indicates the theme system to use
        themeSystem="bootstrap5"
        // Configures the toolbar at the top of the calendar
        headerToolbar={{
          left: "title",
          center: "",
          right: "today,prev,next",
        }}
        // Sets the aspect ratio of the calendar
        aspectRatio={1.5}
        height="auto"
        //Events array passed as a prop for the calendar to display
        events={eventsPlaceholder}
      />
    </div>
  );
}

// Export the `Calendar` component as the default export of the module.
export default CalendarComponent;
