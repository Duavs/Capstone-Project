import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import teacherReducer from "../features/teacher/teacherSlice"
import adminReducer from "../features/admin/adminSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teacher: teacherReducer,
    admin: adminReducer,
  }
})