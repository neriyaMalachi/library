"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import axios from "axios";

import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

const Calendar: React.FC = () => {
  const [modalForAddEvent, setModalForAddEvent] = useState(false);
  const [enshureDelete, setEnshureDelete] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [date, setDate] = useState<any>();
  const queryClient = useQueryClient();

  const AllEvents = useQuery({
    queryKey: ["AllEvents"],
    queryFn: () => axios.get("/api/calendar"),
  });
  const addEvent = useMutation({
    mutationFn: (data: any) => {
      return axios.post("/api/calendar", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AllEvents"] });
    },
  });
  const deleteEvent = useMutation({
    mutationFn: (id: any) => {
      return axios.delete("/api/calendar", { data: { id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["AllEvents"] });
    },
  });
  const handleDateClick = (info: any) => {
    setModalForAddEvent(true);
    setDate(info.dateStr);
  };
  return (
    <div className="flex   w-full h-full justify-center items-start">
      <div className=" xl:size-3/6 md:size-4/6   ">
        {modalForAddEvent && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white flex flex-col justify-around text-center h-96 p-3">
                  {/* Modal content */}
                  <h1 className="text-xl font-bold mb-4">
                    add event for {date}{" "}
                  </h1>

                  <div className="flex flex-col justify-aroundw   ">
                    <fieldset className=" rounded-lg bg-zinc-100  w-full h-10 p-2">
                      <input
                        type="text"
                        autoFocus
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        placeholder="message"
                        className="w-full h-full bg-[transparent] border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      />
                    </fieldset>
                  </div>

                  <div className="flex justify-around w-44">
                    <button
                      onClick={() => {
                        addEvent.mutate({ message, date });
                        setModalForAddEvent(false);
                      }}
                      className="bg-blue-500 rounded-lg text-white p-2"
                    >
                      add event
                    </button>
                    <button
                      onClick={() => setModalForAddEvent(false)}
                      className="bg-blue-500 rounded-lg text-white p-2"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {enshureDelete && (
          <div className="">
            <h1>אתה בטוח שברצונך למחוק?</h1>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white flex flex-col p-4">
                    {/* Modal content */}
                    <h1 className="text-xl text-right font-bold mb-4">
                      ?האם אתה בטוח
                    </h1>

                    <div className="flex justify-around w-44">
                      <button
                        onClick={() => setEnshureDelete(false)}
                        className="bg-blue-500 rounded-lg text-white p-2"
                      >
                        ביטול
                      </button>
                      <button
                        onClick={() => {
                          setDeleted(true);
                          setEnshureDelete(false);
                        }}
                        className="bg-blue-500 rounded-lg text-white p-2"
                      >
                        מחק
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <FullCalendar
          headerToolbar={{
            left: "prevYear,prev,today,next,nextYear",
            center: "title",
            right: "",
          }}
          
          titleFormat={{
            year: "2-digit",
            month: "short",
          }}
          buttonText={{
            today: 'היום'
          }}
          locale={"he"}
          direction="rtl"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={AllEvents.data?.data}
          eventColor="silver"
          eventTextColor="black"
          displayEventTime={true}
          editable={true}
          selectable={true}
          dateClick={handleDateClick}
          windowResizeDelay={0}
          eventClick={(e: any) => {
            deleteEvent.mutate(e.event._def.publicId);
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
