// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** addSensor POST /api/sensor/add */
export async function addSensorUsingPOST(
  body: API.SensorAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/sensor/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteSensor POST /api/sensor/delete */
export async function deleteSensorUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/sensor/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSensorById GET /api/sensor/get */
export async function getSensorByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSensorByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSensorInfo>('/api/sensor/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSensor GET /api/sensor/list */
export async function listSensorUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSensorUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListSensorInfo>('/api/sensor/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSensorByLocationType GET /api/sensor/list/locationType */
export async function listSensorByLocationTypeUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapstringobject>('/api/sensor/list/locationType', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listSensorByPage GET /api/sensor/list/page */
export async function listSensorByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSensorByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageSensorInfo>('/api/sensor/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateSensor POST /api/sensor/update */
export async function updateSensorUsingPOST(
  body: API.SensorUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/sensor/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** welcome GET /api/sensor/welcome */
export async function welcomeUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapstringlong>('/api/sensor/welcome', {
    method: 'GET',
    ...(options || {}),
  });
}
