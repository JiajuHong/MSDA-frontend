// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** addProject POST /api/project/add */
export async function addProjectUsingPOST(
  body: API.ProjectAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/project/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProject POST /api/project/delete */
export async function deleteProjectUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/project/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getProjectById GET /api/project/get */
export async function getProjectByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProjectInfo>('/api/project/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProject GET /api/project/list */
export async function listProjectUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProjectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListProjectInfo>('/api/project/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProjectByPage GET /api/project/list/page */
export async function listProjectByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProjectByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProjectInfo>('/api/project/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateProject POST /api/project/update */
export async function updateProjectUsingPOST(
  body: API.ProjectUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/project/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
