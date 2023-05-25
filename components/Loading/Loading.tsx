import React from 'react';
import { Spin } from 'antd';

export default function Loading(props: any) {
  return (
    <div>
      <div className="page-transition-wrapper-div">
        <div className="page-transition-icon-wrapper">
          <Spin tip="Loading..." size="large"></Spin>
        </div>
      </div>
    </div>
  );
}
