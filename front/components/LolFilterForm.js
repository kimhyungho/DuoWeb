import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Input, Select, Checkbox, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { filterLolPostRequestAction } from '../reducers/post'
import Router from 'next/router';

const LolFilterForm = () => {

    const { me } = useSelector((state) => state.user);
    const {filterLolPostDone, filterLolPostLoading} = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const [gameMode, setGameMode] = useState(null);
    const [headcount, setHeadcount] = useState(null);
    const [wantTier, setWantTier] = useState(null);

    const [top, setTop] = useState(false);
    const [jungle, setJungle] = useState(false);
    const [mid, setMid] = useState(false);
    const [bottom, setBottom] = useState(false);
    const [support, setSupport] = useState(false);
    const [talkOn, setTalkOn] = useState(3);

    const onSetGameMode = useCallback((value) => {
        setGameMode(value);
    });

    const onSetHeadcount = useCallback((value) => {
        setHeadcount(value);
    });

    const onSetWantTier = useCallback((value) => {
        setWantTier(value);
    });

    const onSetTalkOn = useCallback((e) => {
        setTalkOn(e.target.value);
    });

    const onSetTop = useCallback(() => {
        setTop(!top);
    });

    const onSetJungle = useCallback(() => {
        setJungle(!jungle);
    });

    const onSetMid = useCallback(() => {
        setMid(!mid);
    });

    const onSetBottom = useCallback(() => {
        setBottom(!bottom);
    });

    const onSetSupport = useCallback(() => {
        setSupport(!support);
    });


    const onSubmit = useCallback(() => {
        var mTop, mJungle, mMid, mBottom, mSupport;

        if (top) mTop = 1;
        else mTop = 2;

        if (jungle) mJungle = 1;
        else mJungle = 2;

        if (mid) mMid = 1;
        else mMid = 2;

        if (bottom) mBottom = 1;
        else mBottom = 2;

        if (support) mSupport = 1;
        else mSupport = 2;

        const data = {
            userToken: me.userToken,
            userNickname: me.nickname, userId: me.userId,
            gameMode: gameMode, wantTier: wantTier,
             headCount: headcount,
            top: mTop, jungle: mJungle, mid: mMid,
            bottom: mBottom, support: mSupport, talkOn: talkOn, 
            limit: 15, offset: 0,
        };
        dispatch(filterLolPostRequestAction(data));
    }, [gameMode, headcount, wantTier, top, jungle, mid, bottom, support, talkOn]);




    return (
        <div style={{borderColor: '#000000'}}>
             <Select
                        style={{ width: 200 }}
                        placeholder="게임 모드"
                        onChange={onSetGameMode}
                    >
                        <Select.Option value="솔랭">솔랭</Select.Option>
                        <Select.Option value="자랭">자랭</Select.Option>
                        <Select.Option value="일반">일반</Select.Option>
                        <Select.Option value="칼바람">칼바람</Select.Option>
                        <Select.Option value="커스텀">커스텀</Select.Option>
                    </Select>

                    <br />

                    <Select
                        style={{ width: 200 }}
                        placeholder="인원 수"
                        onChange={onSetHeadcount}
                    >
                        <Select.Option value={1}>1명</Select.Option>
                        <Select.Option value={2}>2명</Select.Option>
                        <Select.Option value={3}>3명</Select.Option>
                        <Select.Option value={4}>4명</Select.Option>
                    </Select>
                    <br />
                    <Select
                        style={{ width: 200 }}
                        placeholder="나의 티어"
                        onChange={onSetWantTier}
                    >
                        <Select.Option value={1}>상관없음</Select.Option>
                        <Select.Option value={6}>Iron4</Select.Option>
                        <Select.Option value={7}>Iron3</Select.Option>
                        <Select.Option value={8}>Iron2</Select.Option>
                        <Select.Option value={9}>Iron1</Select.Option>
                        <Select.Option value={16}>Bronze4</Select.Option>
                        <Select.Option value={17}>Bronze3</Select.Option>
                        <Select.Option value={18}>Bronze2</Select.Option>
                        <Select.Option value={19}>Bronze1</Select.Option>
                        <Select.Option value={26}>Silver4</Select.Option>
                        <Select.Option value={27}>Silver3</Select.Option>
                        <Select.Option value={28}>Silver2</Select.Option>
                        <Select.Option value={29}>Silver1</Select.Option>
                        <Select.Option value={36}>Gold4</Select.Option>
                        <Select.Option value={37}>Gold3</Select.Option>
                        <Select.Option value={38}>Gold2</Select.Option>
                        <Select.Option value={39}>Gold1</Select.Option>
                        <Select.Option value={46}>Platinum4</Select.Option>
                        <Select.Option value={47}>Platinum3</Select.Option>
                        <Select.Option value={48}>Platinum2</Select.Option>
                        <Select.Option value={49}>Platinum1</Select.Option>
                        <Select.Option value={56}>Diamond4</Select.Option>
                        <Select.Option value={57}>Diamond3</Select.Option>
                        <Select.Option value={58}>Diamond2</Select.Option>
                        <Select.Option value={59}>Diamond1</Select.Option>
                        <Select.Option value={70}>Master</Select.Option>
                        <Select.Option value={80}>GrandMaster</Select.Option>
                        <Select.Option value={90}>Challenger</Select.Option>
                    </Select>
                    <br />
                    <Checkbox onChange={onSetTop}>탑</Checkbox>
                    <Checkbox onChange={onSetJungle}>정글</Checkbox>
                    <Checkbox onChange={onSetMid}>미드</Checkbox>
                    <Checkbox onChange={onSetBottom}>바텀</Checkbox>
                    <Checkbox onChange={onSetSupport}>서폿</Checkbox>
                    <br />
                    토크온
                    <br />
                    <Radio.Group
                        onChange={onSetTalkOn}
                        value={talkOn}
                        buttonStyle={"solid"}>
                        <Radio.Button value={1}>가능</Radio.Button>
                        <Radio.Button value={2}>불가능</Radio.Button>
                        <Radio.Button value={3}>상관없음</Radio.Button>
                    </Radio.Group>
                    <br />
                    <Button type="primary" onClick={onSubmit} >필터 적용</Button>
        </div>
    )



}

export default LolFilterForm;