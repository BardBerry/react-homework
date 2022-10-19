import { configureStore } from '@reduxjs/toolkit'
import tagsStateReducer from '../redux/slices/TagSelectorSlice'
import ticketsReducer from '../redux/slices/TicketsSlice'
import currentTicketReducer from '../redux/slices/CurrentTicketSlice'
import draggedTaskReducer from '../redux/slices/DraggedTaskSlice'
import validationReducer from '../redux/slices/ValidationSlice'

export const store = configureStore({
  reducer: {
    tagsState: tagsStateReducer,
    tickets: ticketsReducer,
    currentTicket: currentTicketReducer,
    draggedTask: draggedTaskReducer,
    validation: validationReducer,
  },
})