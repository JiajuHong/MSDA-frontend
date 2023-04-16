// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** addProjectMember POST /api/projectMember/add */
export async function addProjectMemberUsingPOST(
  body: API.ProjectMemberAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/projectMember/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProjectMember POST /api/projectMember/delete */
export async function deleteProjectMemberUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/projectMember/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getProjectMemberById GET /api/projectMember/get */
export async function getProjectMemberByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectMemberByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProjectMember>('/api/projectMember/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProjectMember GET /api/projectMember/list */
export async function listProjectMemberUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProjectMemberUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListProjectMember>('/api/projectMember/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProjectMemberByPage GET /api/projectMember/list/page */
export async function listProjectMemberByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProjectMemberByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProjectMember>('/api/projectMember/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateProjectMember POST /api/projectMember/update */
export async function updateProjectMemberUsingPOST(
  body: API.ProjectMemberUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/projectMember/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
