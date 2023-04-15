import request from '@/plugins/globalRequest';
export async function listProjectUsingGET(
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
