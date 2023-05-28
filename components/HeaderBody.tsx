'use client'

import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { HeaderBodyProps } from '../types/components';

const HeaderBody: React.FC<HeaderBodyProps> = ({
  styleSearch,
  styleTitle,
  styleButton,
  title,
  onSearch,
  onClick,
  titleButton,
}) => {

  return (
    <Row style={{ marginBottom: 16 }}>
      <Col span={3}>
        <h2 style={{ padding: 16, ...styleTitle }}>{title}</h2>
      </Col>
      <Col span={5} style={{ display: 'flex', alignItems: 'center'}}>
        <Input.Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: '100%', paddingRight: 16, ...styleSearch }}
        />
      </Col>
      <Col span={16} style={{ textAlign: 'right' }}>
        <Button
          type="primary"
          size="large"
          onClick={onClick}
          style={{ minWidth: 150, minHeight: 55, ...styleButton }}
        >
          <h3>{titleButton}</h3>
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderBody;
