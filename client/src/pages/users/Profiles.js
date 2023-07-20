import React, { useEffect, useState } from 'react';
import { useList } from '@refinedev/core';
import { Input, Space, Switch } from 'antd';
import { Transfer } from 'antd';

const Profiles = () => {
  const [mobilenum, setMobilenum] = useState('');
  const [filterdata, setFilterdata] = useState([
    {
      field: 'mobile',
      operator: 'contains',
      value: mobilenum,
    },
  ]);

  const { data, isLoading, isError } = useList({
    resource: 'users',
    filters: filterdata,
    pagination: {
        pageSize: 20,
        mode: "server",
    },
  });

  const userlist = data?.data ?? [];
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setFilterdata([
      {
        field: 'mobile',
        operator: 'contains',
        value: mobilenum,
      },
    ]);
  }, [mobilenum]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  const dataval = userlist.map((item) => ({
    key: item.id.toString(),
    username: item.username,
    mobile: item.mobile,
  }));
  const triggerDisable = (checked) => {
    setDisabled(checked);
  };
  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {

    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const triggerShowSearch = (checked) => {
    setShowSearch(checked);
  };

  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  const leftTableColumns = [
    {
      dataIndex: 'tempid',
      title: 'OldId',
    },
    {
      dataIndex: 'id',
      title: 'NewId'
     
    },
    {
        dataIndex: 'mobile',
        title: 'Mobile'
       
      },
    {
      dataIndex: 'sex',
      title: 'Sex',
    },
  ];
  const rightTableColumns = [
    {
        dataIndex: 'tempid',
        title: 'OldId',
      },
      {
        dataIndex: 'id',
        title: 'NewId'
       
      },
      {
          dataIndex: 'mobile',
          title: 'Mobile'
         
        },
      {
        dataIndex: 'sex',
        title: 'Sex',
      },
  ];

  return (
    <>
      <button
        onClick={() => {
          setFilterdata([
            {
              field: 'mobile',
              operator: 'contains',
              value: mobilenum,
            },
          ]);
        }}
      >
        User Filter
      </button>
      <Input
        placeholder="Basic usage"
        onChange={(event) => {
          console.log('Change in mobile', event.target.value);
          setMobilenum(event.target.value);
        }}
      />
      <ul>
        {/* Uncomment this section once you want to display the user list */}
        {/* {userlist.map((user) => (
          <li key={user.id}>
            <h4>
              {user.id}-{user.username} - ({user.mobile}) -({user.tempid})
            </h4>
          </li>
        ))} */}
      </ul>
      <Transfer
        dataSource={dataval}
        titles={['Source', 'Target']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
    
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
        render={(item) => `${item.username} - ${item.mobile}`}
        
      />
        <Space
        style={{
          marginTop: 16,
        }}
      >
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={triggerDisable}
        />
        <Switch
          unCheckedChildren="showSearch"
          checkedChildren="showSearch"
          checked={showSearch}
          onChange={triggerShowSearch}
        />
      </Space>
    </>
  );
};

export default Profiles;
