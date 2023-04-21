// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** humidityHistory GET /api/charts/history/humidity */
export async function humidityHistoryUsingGET(options?: { [key: string]: any }) {
  return request<API.HumidityVO[]>('/api/charts/history/humidity', {
    method: 'GET',
    ...(options || {}),
  });
}

/** pressureHistory GET /api/charts/history/pressure */
export async function pressureHistoryUsingGET(options?: { [key: string]: any }) {
  return request<API.PressureVO[]>('/api/charts/history/pressure', {
    method: 'GET',
    ...(options || {}),
  });
}

/** temperatureHistory GET /api/charts/history/temperature */
export async function temperatureHistoryUsingGET(options?: { [key: string]: any }) {
  return request<API.TemperatureVO[]>('/api/charts/history/temperature', {
    method: 'GET',
    ...(options || {}),
  });
}

/** humidityRealtime GET /api/charts/realtime/humidity */
export async function humidityRealtimeUsingGET(options?: { [key: string]: any }) {
  return request<API.HumidityVO[]>('/api/charts/realtime/humidity', {
    method: 'GET',
    ...(options || {}),
  });
}

/** pressureRealtime GET /api/charts/realtime/pressure */
export async function pressureRealtimeUsingGET(options?: { [key: string]: any }) {
  return request<API.PressureVO[]>('/api/charts/realtime/pressure', {
    method: 'GET',
    ...(options || {}),
  });
}

/** temperatureRealtime GET /api/charts/realtime/temperature */
export async function temperatureRealtimeUsingGET(options?: { [key: string]: any }) {
  return request<API.TemperatureVO[]>('/api/charts/realtime/temperature', {
    method: 'GET',
    ...(options || {}),
  });
}
