import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import { formatDate } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import {
  Box,
  Flex,
  Grid,
  List,
  ListItem,
  Text,
  Heading,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons"
import "./DBcalendar.css"

const DBcalendar = () => {
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  const bookings = [
    {
      id: "01",
      title: "Model 3",
      start: "2023-06-15T12:00:00",
      end: "2023-07-18T16:41:00",
    },
    {
      id: "02",
      title: "F-150",
      start: "2023-07-10T12:00:00",
      end: "2023-07-20T15:52:00",
    },
    {
      id: "03",
      title: "B-Class",
      start: "2023-07-01T12:00:00",
      end: "2023-07-20T15:52:00",
    },
    {
      id: "04",
      title: "Tucson",
      start: "2023-07-09T12:00:00",
      end: "2023-07-21T21:28:00",
    },
    {
      id: "05",
      title: "Formentor",
      start: "2023-07-219T12:00:00",
      end: "2023-07-22T23:21:00",
    },
    {
      id: "06",
      title: "Civic",
      start: "2023-07-22T12:00:00",
      end: "2023-07-29T19:20:00",
    },
  ]

  return (
    <Box m="3rem 1.5rem 0 1.5rem" display="flex" justifyContent="space-between">
      <Box
        display={{ base: "none", xl: "block" }}
        p="2rem 1.5rem"
        boxShadow="md"
        borderRadius="8"
        bg="white"
        flex="1 1 20%"
        overflowY="auto"
      >
        <Heading
          textTransform="uppercase"
          fontSize="xl"
          color="#2c5282"
          fontWeight="bold"
          pl="1rem"
          pb="1rem"
        >
          Schedule
        </Heading>
        <List>
          {currentEvents.map((event) => (
            <ListItem sx={{ margin: "0.5rem 0", borderRadius: "2px" }}>
              <Tag
                size="md"
                key={event.id}
                borderRadius="6"
                variant="solid"
                borderWidth="1px"
                borderColor="red.600"
                backgroundColor="red.300"
                color="red.900"
                fontWeight="600"
                marginBottom="1rem"
                w="100%"
                p="0.33rem"
              >
                <TagLeftIcon>
                  <FontAwesomeIcon icon={faLock} />
                </TagLeftIcon>
                <TagLabel>
                  {event.title} -{" "}
                  {formatDate(event.start, { month: "short", day: "numeric" })}
                </TagLabel>
              </Tag>
            </ListItem>
          ))}
          {currentEvents.map((event) => (
            <ListItem sx={{ margin: "10px 0", borderRadius: "2px" }}>
              <Tag
                size="md"
                key={event.id}
                borderRadius="6"
                variant="solid"
                borderWidth="1px"
                borderColor="green.400"
                backgroundColor="green.200"
                color="green.700"
                fontWeight="600"
                marginBottom="1rem"
                w="100%"
                p="0.33rem"
              >
                <TagLeftIcon>
                  <FontAwesomeIcon icon={faLockOpen} />
                </TagLeftIcon>
                <TagLabel>
                  {event.title} -{" "}
                  {formatDate(event.end, { month: "short", day: "numeric" })}
                </TagLabel>
              </Tag>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box flex="1 1 100%" ml={{ base: "none", xl: "3rem" }}>
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
          titleFormat={{ year: "numeric", month: "long", day: "numeric" }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekNumberCalculation="ISO"
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={bookings}
        />
      </Box>
    </Box>
  )
}

export { DBcalendar }
