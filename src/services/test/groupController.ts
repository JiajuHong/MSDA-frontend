// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** addWorkGroup POST /api/group/add */
export async function addWorkGroupUsingPOST(
  body: API.WorkGroupAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/group/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteWorkGroup POST /api/group/delete */
export async function deleteWorkGroupUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/group/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getWorkGroupById GET /api/group/get */
export async function getWorkGroupByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getWorkGroupByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseWorkGroup>('/api/group/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listWorkGroup GET /api/group/list */
export async function listWorkGroupUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listWorkGroupUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListWorkGroup>('/api/group/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listWorkGroupByPage GET /api/group/list/page */
export async function listWorkGroupByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listWorkGroupByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageWorkGroup>('/api/group/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateWorkGroup POST /api/group/update */
export async function updateWorkGroupUsingPOST(
  body: API.WorkGroupUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/group/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
