// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** addStructure POST /api/structure/add */
export async function addStructureUsingPOST(
  body: API.StructureAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/structure/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteStructure POST /api/structure/delete */
export async function deleteStructureUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/structure/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getStructureById GET /api/structure/get */
export async function getStructureByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getStructureByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseStructureInfo>('/api/structure/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listStructure GET /api/structure/list */
export async function listStructureUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listStructureUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListStructureInfo>('/api/structure/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listStructureByPage GET /api/structure/list/page */
export async function listStructureByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listStructureByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageStructureInfo>('/api/structure/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateStructure POST /api/structure/update */
export async function updateStructureUsingPOST(
  body: API.StructureUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/structure/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
