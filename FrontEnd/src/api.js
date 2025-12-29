const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function request(path, options = {}) {
  const url = `${API_URL}${path}`;
  
  // Add auth token to headers if available
  const token = getAuthToken();
  if (token) {
    options.headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    };
  }
  
  const res = await fetch(url, options);

  if (!res.ok) {
    let detail = 'Request failed';
    try {
      const data = await res.json();
      detail = data.detail || detail;
    } catch (_) {
      // ignore json parse errors
    }
    throw new Error(detail);
  }

  if (res.status === 204) return null;
  return res.json();
}

export async function login({ email, password }) {
  const body = new URLSearchParams({
    username: email,
    password,
  });

  const data = await request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  return data; // { access_token, token_type }
}

export async function register({ fullName, email, dueDate, userType, password }) {
  // Backend expects due_date as datetime string; send start of day if provided
  const dueDateIso = dueDate ? `${dueDate}T00:00:00` : null;

  return request('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      full_name: fullName,
      due_date: dueDateIso,
      user_type: userType,
    }),
  });
}

// ===== Static Data Endpoints =====
export async function getDailyTip() {
  return request('/static/daily-tip');
}

export async function getNutritionTips() {
  return request('/static/nutrition-tips');
}

export async function getVaccineSchedule() {
  return request('/static/vaccine-schedule');
}

export async function getFeedingGuide() {
  return request('/static/feeding-guide');
}

export async function getSafeFoods() {
  return request('/static/safe-foods');
}

// ===== Growth Records =====
export async function getGrowthRecords() {
  return request('/growth/records');
}

export async function createGrowthRecord(recordData) {
  return request('/growth/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recordData),
  });
}

export async function deleteGrowthRecord(recordId) {
  return request(`/growth/records/${recordId}`, {
    method: 'DELETE',
  });
}

// ===== Reminders =====
export async function getReminders() {
  return request('/reminders/');
}

export async function createReminder(reminderData) {
  return request('/reminders/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reminderData),
  });
}

export async function completeReminder(reminderId) {
  return request(`/reminders/${reminderId}/complete`, {
    method: 'PATCH',
  });
}

export async function deleteReminder(reminderId) {
  return request(`/reminders/${reminderId}`, {
    method: 'DELETE',
  });
}

// ===== Auth Token Management =====
export function setAuthToken(token) {
  if (!token) return;
  localStorage.setItem('auth_token', token);
}

export function getAuthToken() {
  return localStorage.getItem('auth_token');
}

export function clearAuthToken() {
  localStorage.removeItem('auth_token');
}

