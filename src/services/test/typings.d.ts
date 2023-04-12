declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseListPost = {
    code?: number;
    data?: Post[];
    message?: string;
  };

  type BaseResponseListSensorInfo = {
    code?: number;
    data?: SensorInfo[];
    message?: string;
  };

  type BaseResponseListStructureInfo = {
    code?: number;
    data?: StructureInfo[];
    message?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
  };

  type BaseResponseListWorkGroup = {
    code?: number;
    data?: WorkGroup[];
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePagePost = {
    code?: number;
    data?: PagePost;
    message?: string;
  };

  type BaseResponsePageSensorInfo = {
    code?: number;
    data?: PageSensorInfo;
    message?: string;
  };

  type BaseResponsePageStructureInfo = {
    code?: number;
    data?: PageStructureInfo;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsePageWorkGroup = {
    code?: number;
    data?: PageWorkGroup;
    message?: string;
  };

  type BaseResponsePost = {
    code?: number;
    data?: Post;
    message?: string;
  };

  type BaseResponseSensorInfo = {
    code?: number;
    data?: SensorInfo;
    message?: string;
  };

  type BaseResponseStructureInfo = {
    code?: number;
    data?: StructureInfo;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BaseResponseWorkGroup = {
    code?: number;
    data?: WorkGroup;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getPostByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSensorByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getStructureByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getWorkGroupByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type listPostByPageUsingGETParams = {
    age?: number;
    contact?: string;
    content?: string;
    current?: number;
    education?: string;
    gender?: number;
    job?: string;
    loveExp?: string;
    pageSize?: number;
    place?: string;
    reviewStatus?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type listPostUsingGETParams = {
    age?: number;
    contact?: string;
    content?: string;
    current?: number;
    education?: string;
    gender?: number;
    job?: string;
    loveExp?: string;
    pageSize?: number;
    place?: string;
    reviewStatus?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type listSensorByPageUsingGETParams = {
    created_by?: string;
    created_time?: string;
    current?: number;
    group_id?: number;
    id?: number;
    location?: string;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    structure_id?: number;
    type?: string;
    updated_time?: string;
  };

  type listSensorUsingGETParams = {
    created_by?: string;
    created_time?: string;
    current?: number;
    group_id?: number;
    id?: number;
    location?: string;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    structure_id?: number;
    type?: string;
    updated_time?: string;
  };

  type listStructureByPageUsingGETParams = {
    created_by?: string;
    created_time?: string;
    current?: number;
    id?: number;
    location?: string;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updated_time?: string;
  };

  type listStructureUsingGETParams = {
    created_by?: string;
    created_time?: string;
    current?: number;
    id?: number;
    location?: string;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updated_time?: string;
  };

  type listUserByPageUsingGETParams = {
    company?: string;
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
    workGroup?: string;
  };

  type listUserUsingGETParams = {
    company?: string;
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
    workGroup?: string;
  };

  type listWorkGroupByPageUsingGETParams = {
    admin?: string;
    current?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type listWorkGroupUsingGETParams = {
    admin?: string;
    current?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PagePost = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSensorInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SensorInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageStructureInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: StructureInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageWorkGroup = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: WorkGroup[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Post = {
    age?: number;
    contact?: string;
    content?: string;
    createTime?: string;
    education?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    job?: string;
    loveExp?: string;
    photo?: string;
    place?: string;
    reviewMessage?: string;
    reviewStatus?: number;
    thumbNum?: number;
    updateTime?: string;
    userId?: number;
    viewNum?: number;
  };

  type PostAddRequest = {
    age?: number;
    contact?: string;
    content?: string;
    education?: string;
    gender?: number;
    job?: string;
    loveExp?: string;
    photo?: string;
    place?: string;
  };

  type PostUpdateRequest = {
    age?: number;
    contact?: string;
    content?: string;
    education?: string;
    gender?: number;
    id?: number;
    job?: string;
    loveExp?: string;
    photo?: string;
    place?: string;
    reviewMessage?: string;
    reviewStatus?: number;
  };

  type SensorAddRequest = {
    created_by?: string;
    group_id?: number;
    location?: string;
    name?: string;
    status?: string;
    structure_id?: number;
    type?: string;
  };

  type SensorInfo = {
    created_by?: string;
    created_time?: string;
    group_id?: number;
    id?: number;
    isDelete?: number;
    location?: string;
    name?: string;
    status?: string;
    structure_id?: number;
    type?: string;
    updated_time?: string;
  };

  type SensorUpdateRequest = {
    created_by?: string;
    group_id?: number;
    id?: number;
    location?: string;
    name?: string;
    status?: string;
    structure_id?: number;
    type?: string;
  };

  type StructureAddRequest = {
    created_by?: string;
    location?: string;
    name?: string;
  };

  type StructureInfo = {
    created_by?: string;
    created_time?: string;
    id?: number;
    isDelete?: number;
    location?: string;
    name?: string;
    updated_time?: string;
  };

  type StructureUpdateRequest = {
    created_by?: string;
    id?: number;
    location?: string;
    name?: string;
  };

  type User = {
    company?: string;
    createTime?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    workGroup?: string;
  };

  type UserAddRequest = {
    company?: string;
    gender?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    workGroup?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    company?: string;
    gender?: number;
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
    workGroup?: string;
  };

  type UserVO = {
    company?: string;
    createTime?: string;
    gender?: number;
    id?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
    workGroup?: string;
  };

  type View = {
    contentType?: string;
  };

  type WorkGroup = {
    admin?: string;
    created_time?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updated_time?: string;
  };

  type WorkGroupAddRequest = {
    admin?: string;
    name?: string;
  };

  type WorkGroupUpdateRequest = {
    admin?: string;
    id?: number;
    name?: string;
  };
}
