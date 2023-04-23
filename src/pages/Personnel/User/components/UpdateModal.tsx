import type {ProColumns, ProFormInstance} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import {Modal} from 'antd';
import React, {useEffect, useRef} from 'react';

export type Props = {
  values: API.UserVO;
  columns: ProColumns<API.UserVO>[];
  onCancel: () => void;
  onSubmit: (values: API.UserVO) => Promise<void>;
  visible: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const { values, visible, columns, onCancel, onSubmit } = props;

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (formRef) {
      formRef.current?.setFieldsValue(values);
    }
  }, [values]);

  return (
    <Modal title='修改人员' visible={visible} footer={null} onCancel={() => onCancel?.()}>
      <ProTable
        type="form"
        formRef={formRef}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
