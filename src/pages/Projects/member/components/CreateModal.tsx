import type {ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import {Modal} from 'antd';
import React from 'react';

export type Props = {
  columns: ProColumns<API.ProjectMemberAddRequest>[];
  onCancel: () => void;
  onSubmit: (values: API.ProjectMemberAddRequest) => Promise<void>;
  visible: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onCancel, onSubmit } = props;

  return (
    <Modal title='新增项目成员' visible={visible} footer={null} onCancel={() => onCancel?.()}>
      <ProTable
        type="form"
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default CreateModal;
