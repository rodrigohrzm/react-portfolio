import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, Flex, Grid, List, ListItem, Text, Heading, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import './DBcalendar.css';

const DBcalendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
      <Box m='3rem 1.5rem 0 1.5rem' display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box p='2rem 1.5rem' boxShadow='md' borderRadius='8' bg='white' flex="1 1 20%" overflowY='auto'>
          <Heading textTransform='uppercase' fontSize='xl' color='#2c5282' fontWeight='bold' pl='1rem' pb='1rem'>Schedule</Heading>
          <List>{currentEvents.map((event) => (
              <ListItem sx={{margin: "0.5rem 0", borderRadius: "2px"}}>
                <Tag
                  size='md'
                  key={event.id}
                  borderRadius='6'
                  variant='solid'
                  borderWidth='1px'
                  borderColor='red.600'
                  backgroundColor='red.300'
                  color='red.900'
                  fontWeight='600'
                  marginBottom='1rem'
                  w='100%'
                  p='0.33rem'
                >
                  <TagLeftIcon><FontAwesomeIcon icon={faLock} /></TagLeftIcon>
                  <TagLabel>CAR: {formatDate(event.start, {month: "short",day: "numeric",})}</TagLabel>
                </Tag>
              </ListItem>
            ))}
            {currentEvents.map((event) => (
              <ListItem sx={{margin: "10px 0", borderRadius: "2px"}}>
                <Tag
                  size='md'
                  key={event.id}
                  borderRadius='6'
                  variant='solid'
                  borderWidth='1px'
                  borderColor='green.400'
                  backgroundColor='green.200'
                  color='green.700'
                  fontWeight='600'
                  marginBottom='1rem'
                  w='100%'
                  p='0.33rem'
                >
                  <TagLeftIcon><FontAwesomeIcon icon={faLockOpen} /></TagLeftIcon>
                  <TagLabel>CAR: {formatDate(event.end, {month: "short",day: "numeric",})}</TagLabel>
                </Tag>
              </ListItem>
            ))}</List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="3rem">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            titleFormat={{ year: 'numeric', month: 'long', day: 'numeric' }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekNumberCalculation='ISO'
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-06-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2023-06-28",
              },
            ]}
          />
        </Box>
      </Box>
  );
};

export { DBcalendar };