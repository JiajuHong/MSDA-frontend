import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Avatar, Button, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';
import {
  addProjectMemberUsingPOST,
  deleteProjectMemberUsingPOST,
  listProjectMemberUsingGET,
  updateProjectMemberUsingPOST,
} from '@/services/test/projectMemberController';

const TableList: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.ProjectMemberVO>();

  const handleAdd = async (fields: API.ProjectMemberAddRequest) => {
    const hide = message.loading('正在添加');
    try {
      await addProjectMemberUsingPOST({
        ...fields,
      });
      hide();
      message.success('创建成功');
      handleModalVisible(false);
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('创建失败，' + error.message);
      return false;
    }
  };

  const handleRemove = async (record: API.ProjectMemberVO) => {
    Modal.confirm({
      title: '确认删除？',
      content: '删除后不可恢复',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        const hide = message.loading('正在删除');
        if (!record) return true;

        try {
          await deleteProjectMemberUsingPOST({
            id: record.id,
          });
          hide();
          message.success('删除成功，即将刷新');
          actionRef.current?.reload();
          return true;
        } catch (error: any) {
          hide();
          message.error('删除失败，请重试');
          return false;
        }
      },
    });
  };

  const handleUpdate = async (fields: API.ProjectMemberUpdateRequest) => {
    if (!currentRow) {
      return;
    }
    const hide = message.loading('修改中');
    try {
      await updateProjectMemberUsingPOST({
        id: currentRow.id,
        ...fields,
      });
      hide();
      message.success('操作成功');
      return true;
    } catch (error: any) {
      hide();
      message.error('操作失败，' + error.message);
      return false;
    }
  };

  const columns: ProColumns<API.ProjectMemberVO>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      search: false,
    },
    {
      title: '成员名称',
      dataIndex: 'user_name',
      copyable: true,
      search: true,
    },
    {
      title: '参与项目',
      dataIndex: 'project_name',
      copyable: true,
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      search: false,
      render: (_, record) => (
        <div>
          {/*<Image src={record.userAvatar} width={50} height={50}/>*/}
          <Avatar size="large" src={record.avatar} />
        </div>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'created_time',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '更新时间',
      dataIndex: 'updated_time',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
        <Button
          type="text"
          key="config"
          danger
          onClick={() => {
            handleRemove(record);
          }}
        >
          删除
        </Button>,
      ],
    },
  ];

  const addProjectMemberColumns: ProColumns<API.ProjectMemberAddRequest>[] = [
    {
      title: '成员名称',
      dataIndex: 'user_name',
      copyable: true,
      search: false,
    },
    {
      title: '参与项目',
      dataIndex: 'project_name',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      search: false,
      render: (_, record) => (
        <div>
          {/*<Image src={record.userAvatar} width={50} height={50}/>*/}
          <Avatar src={record.avatar} />
        </div>
      ),
    },
  ];

  const updateProjectMemberColumns: ProColumns<API.ProjectMemberUpdateRequest>[] = [
    {
      title: '成员名称',
      dataIndex: 'user_name',
    },
    {
      title: '参与项目',
      dataIndex: 'project_name',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      search: false,
      render: (_, record) => (
        <div>
          {/*<Image src={record.userAvatar} width={50} height={50}/>*/}
          <Avatar src={record.avatar} />
        </div>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.ProjectMemberVO>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log(sort, filter);
          const res = await listProjectMemberUsingGET({ ...params });
          if (res) {
            return {
              data: res || [],
              success: true,
              total: res?.data?.length || 0,
            };
          } else {
            return {
              data: [],
              success: false,
              total: 0,
            };
          }
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="项目成员管理"
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            新建
          </Button>,
        ]}
      />
      <UpdateModal
        columns={updateProjectMemberColumns}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        visible={updateModalVisible}
        values={currentRow || {}}
      />

      <CreateModal
        columns={addProjectMemberColumns}
        onCancel={() => {
          handleModalVisible(false);
        }}
        onSubmit={(values) => {
          handleAdd(values);
        }}
        visible={createModalVisible}
      />
    </PageContainer>
  );
};

export default TableList;
