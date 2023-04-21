/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.UserVO } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canUser: currentUser,
    canAdmin: currentUser?.userRole === 'admin',
    canRoot: currentUser?.userRole === 'root',
    notRoot: currentUser?.userRole !== 'root',
    notUser: currentUser?.userRole !== 'user',
  };
}

