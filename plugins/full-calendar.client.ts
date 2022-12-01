import "@fullcalendar/core/vdom"; // solve problem with Vite
import FullCalendar, { CalendarOptions } from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';

FullCalendar.options = {
  //dayGridPlugin, interactionPlugin ,listPlugin
  plugins: [dayGridPlugin, interactionPlugin,listPlugin],
  initialView : window.innerWidth < 720 ? 'listWeek':'dayGridMonth',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
  events:[],
//  eventClick:BookingLesson(),
  height: 800,
  eventDisplay: 'auto',
  eventTimeFormat: { 
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  },
  customButtons: {
    prev: {
      text: '上月',
      click: () => { 
     //   let calendarApi = //$refs.fullCalendar.getApi();
       // calendarApi.prev();
       // SearchLessonCalendar();
      }
    }
  }
} as CalendarOptions;

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      fullCalendar: FullCalendar,
    },
  };
});
function BookingLesson(): ((arg: import("@fullcalendar/common").EventClickArg) => void) | undefined {
  throw new Error("Function not implemented.");
}

