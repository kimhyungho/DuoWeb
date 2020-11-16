import React, { useCallback, useState } from 'react';
import { Button, Form, Input, Select, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addLolPostRequestAction, ADD_LOL_POST_REQUEST } from '../reducers/post'

const LolWriteFrom = () => {

    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [gameMode, setGameMode] = useState(null);
    const [headcount, setHeadcount] = useState(null);
    const [startTier, setStartTier] = useState(null);
    const [endTier, setEndTier] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSetGameMode = useCallback((value) => {
        setGameMode(value);
    });

    const onSetHeadcount = useCallback((value) => {
        setHeadcount(value);
    });

    const onSetStartTier = useCallback((value) => {
        setStartTier(value);
    });

    const onSetEndTier = useCallback((value) => {
        setEndTier(value);
    });

    const onSetEndTime = useCallback((value) => {
        setEndTime(value)
    });

    const onSetTitle = useCallback((e) => {
        setTitle(e.target.value)
    });

    const onSetContent = useCallback((e) => {
        setContent(e.target.value)
    });

    

    const onSubmit = useCallback(() => {
        var newDate = new Date();
        newDate.setMinutes(newDate.getMinutes() + endTime);
        console.log(newDate);

        // dispatch({
        //     type: ADD_LOL_POST_REQUEST,
        //     data: {userNickname: me.nickname, userId: me.userId, gameMode: gameMode, title: title, startTier: startTier, endTier: endTier}
        // });
    }, []);

    return (
        <>
            {me.userId
                ? <Form style={{ margin: '20px' }}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="게임 모드"
                        optionFilterProp="gameMode"
                        onChange={onSetGameMode}
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

                    <br />

                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="인원 수"
                        optionFilterProp="headcount"
                        onChange={onSetHeadcount}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="1">1명</Option>
                        <Option value="2">2명</Option>
                        <Option value="3">3명</Option>
                        <Option value="4">4명</Option>
                    </Select>
                    <br />
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="최저 티어"
                        optionFilterProp="startTier"
                        onChange={onSetStartTier}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value={1}>상관없음</Option>
                        <Option value={6}>Iron4</Option>
                        <Option value={7}>Iron3</Option>
                        <Option value={8}>Iron2</Option>
                        <Option value={9}>Iron1</Option>
                        <Option value={16}>Bronze4</Option>
                        <Option value={17}>Bronze3</Option>
                        <Option value={18}>Bronze2</Option>
                        <Option value={19}>Bronze1</Option>
                        <Option value={26}>Silver4</Option>
                        <Option value={27}>Silver3</Option>
                        <Option value={28}>Silver2</Option>
                        <Option value={29}>Silver1</Option>
                        <Option value={36}>Gold4</Option>
                        <Option value={37}>Gold3</Option>
                        <Option value={38}>Gold2</Option>
                        <Option value={39}>Gold1</Option>
                        <Option value={46}>Platinum4</Option>
                        <Option value={47}>Platinum3</Option>
                        <Option value={48}>Platinum2</Option>
                        <Option value={49}>Platinum1</Option>
                        <Option value={56}>Diamond4</Option>
                        <Option value={57}>Diamond3</Option>
                        <Option value={58}>Diamond2</Option>
                        <Option value={59}>Diamond1</Option>
                        <Option value={70}>Master</Option>
                        <Option value={80}>GrandMaster</Option>
                        <Option value={90}>Challenger</Option>
                    </Select>
                    ~
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="최고 티어"
                        optionFilterProp="EndTier"
                        onChange={onSetEndTier}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value={100}>상관없음</Option>
                        <Option value={6}>Iron4</Option>
                        <Option value={7}>Iron3</Option>
                        <Option value={8}>Iron2</Option>
                        <Option value={9}>Iron1</Option>
                        <Option value={16}>Bronze4</Option>
                        <Option value={17}>Bronze3</Option>
                        <Option value={18}>Bronze2</Option>
                        <Option value={19}>Bronze1</Option>
                        <Option value={26}>Silver4</Option>
                        <Option value={27}>Silver3</Option>
                        <Option value={28}>Silver2</Option>
                        <Option value={29}>Silver1</Option>
                        <Option value={36}>Gold4</Option>
                        <Option value={37}>Gold3</Option>
                        <Option value={38}>Gold2</Option>
                        <Option value={39}>Gold1</Option>
                        <Option value={46}>Platinum4</Option>
                        <Option value={47}>Platinum3</Option>
                        <Option value={48}>Platinum2</Option>
                        <Option value={49}>Platinum1</Option>
                        <Option value={56}>Diamond4</Option>
                        <Option value={57}>Diamond3</Option>
                        <Option value={58}>Diamond2</Option>
                        <Option value={59}>Diamond1</Option>
                        <Option value={70}>Master</Option>
                        <Option value={80}>GrandMaster</Option>
                        <Option value={90}>Challenger</Option>
                    </Select>
                    <br />
                    <Select
                        showSearch
                        style={{ width: 410 }}
                        placeholder="만료시간"
                        optionFilterProp="endTime"
                        onChange={onSetEndTime}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value={15}>15분 뒤 만료</Option>
                        <Option value={30}>30분 뒤 만료</Option>
                        <Option value={60}>1시간 뒤 만료</Option>
                        <Option value={120}>2시간 뒤 만료</Option>
                        <Option value={180}>3시간 뒤 만료</Option>
                        <Option value={360}>6시간 뒤 만료</Option>
                        <Option value={1440}>24시간 뒤 만료</Option>
                    </Select>
                    <br />
                    <Input placeholder={'제목'} onChange={onSetTitle} style={{ marginBottom: '20px' }}></Input>
                    <Input.TextArea placeholder={'내용'} onChange={onSetContent} style={{ height: '200px' }}></Input.TextArea>
                    <Button type="primary" onClick={onSubmit}>제출</Button>
                </Form>
                : <div>글쓰기 - 로그인이 필요한 페이지입니다</div>}

        </>

    )
};



export default LolWriteFrom;