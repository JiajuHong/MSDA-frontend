import type {ProColumns, ProFormInstance} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import {Modal} from 'antd';
import React, {useEffect, useRef} from 'react';

export type Props = {
  values: API.StructureInfo;
  columns: ProColumns<API.StructureInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.StructureInfo) => Promise<void>;
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
    <Modal title='修改结构物' visible={visible} footer={null} onCancel={() => onCancel?.()}>
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
