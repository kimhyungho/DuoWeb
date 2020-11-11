import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useSelector } from 'react-redux';

function onChange(value) {
    console.log(`selected ${value}`);
  }
    
  function onSearch(val) {
    console.log('search:', val);
  }

const LolWriteFrom = () => {
    const userId = useSelector((state) => state.user.userId)
    return (
        <>
            {userId
                ? <Form style={{ margin: '20px' }}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="게임 모드"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="솔량">솔랭</Option>
                        <Option value="자랭">자랭</Option>
                        <Option value="일반">일반</Option>
                        <Option value="칼바람">칼바람</Option>
                        <Option value="커스텀">커스텀</Option>
                    </Select>

                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="인원 수"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="1">1명</Option>
                        <Option value="2">2명</Option>
                        <Option value="3">3명</Option>
                        <Option value="4">4명</Option>
                    </Select>

                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="솔량">솔랭</Option>
                        <Option value="자랭">자랭</Option>
                        <Option value="일반">일반</Option>
                        <Option value="칼바람">칼바람</Option>
                        <Option value="커스텀">커스텀</Option>
                    </Select>

                    <Input placeholder={'제목'} style={{ marginBottom: '20px' }}></Input>
                    <Input.TextArea placeholder={'내용'} style={{ height: '200px' }}></Input.TextArea>
                    <Button>제출</Button>
                </Form>
                : <div>글쓰기 - 로그인이 필요한 페이지입니다</div>}

        </>

    )
};



export default LolWriteFrom;