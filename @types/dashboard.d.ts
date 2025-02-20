// @types/dashboard.d.ts
export type GlobalHabit = {
  id: number,
  user_id: number,
  title: string,
  description: string,
  is_global: number,
  created_at: string,
  today_users: number,
  total_users: number,
  total_completions: number,
  total_attempts: number,
  monthly_users: number,
  completedToday: boolean,
  success_rate: number
}

export type PersonalHabit = {
  id: number,
  user_id: number,
  title: string,
  description: string,
  is_global: number,
  created_at: string
}

export type DashboardPayload = {
  username: string,
  globalHabits: GlobalHabit[],
  personalHabits: PersonalHabit[]
}