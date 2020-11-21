import React, { useCallback, useState, useEffect } from 'react';
import { Button, Form, Input, Select, Checkbox, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateLolPostRequestAction, loadAllLolPostsRequestAction } from '../reducers/post'
import Router from 'next/router';

const LolWriteFrom = () => {

    const { me } = useSelector((state) => state.user);
    const { detailLolPost, updateLolPostDone, updateLolPostLoading } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const [isDoneUpdatePost, setIsDoneUpdatePost] = useState(false);
    const [gameMode, setGameMode] = useState(detailLolPost.gameMode);
    const [headcount, setHeadcount] = useState(detailLolPost.headCount);
    const [startTier, setStartTier] = useState(detailLolPost.startTier);
    const [endTier, setEndTier] = useState(detailLolPost.endTier);
    const [endTime, setEndTime] = useState(null);
    const [top, setTop] = useState(false);
    const [jungle, setJungle] = useState(false);
    const [mid, setMid] = useState(false);
    const [bottom, setBottom] = useState(false);
    const [support, setSupport] = useState(false);
    const [talkOn, setTalkOn] = useState(null);
    const [title, setTitle] = useState(detailLolPost.title);
    const [content, setContent] = useState(detailLolPost.content);

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


    const onSetTitle = useCallback((e) => {
        setTitle(e.target.value)
    });

    const onSetContent = useCallback((e) => {
        setContent(e.target.value)
    });

    useEffect(() => {
        const data = { userToken: me.userToken }
        if (updateLolPostDone && isDoneUpdatePost) {
            dispatch(loadAllLolPostsRequestAction(data));
            Router.push('/');
        }
    }, [updateLolPostDone, isDoneUpdatePost]);


    const onSubmit = useCallback(() => {
        if (gameMode === "" || gameMode === null) {
            alert("게임모드를 입력해주세요.");
        } else if (headcount === null) {
            alert("인원수를 입력해주세요.");
        } else if (startTier === null) {
            alert("최저 티어를 입력해주세요");
        } else if (endTier === null) {
            alert("최고 티어를 입력해주세요");
        } else if (startTier > endTier) {
            alert("최저 티어가 최고 티어보다 높습니다.");
        } else if (endTime === null) {
            alert("만료시간을 선택해주세요.");
        } else if (!top && !jungle && !mid && !bottom && !support) {
            alert("포지션을 선택해주세요.");
        } else if (talkOn === null) {
            alert("보이스 사용여부를 선택해주세요.");
        } else if (title === null || title === "") {
            alert("제목을 입력해주새요.");
        } else if (content === null || content === "") {
            alert("내용을 입력해주새요.");
        } else {

            setIsDoneUpdatePost(true);
            var mTop, mJungle, mMid, mBottom, mSupport;
            var newDate = new Date();
            newDate.setMinutes(newDate.getMinutes() + endTime);

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
                postId: detailLolPost.id, userId: me.userId,
                gameMode: gameMode, title: title,
                startTier: startTier, endTier: endTier,
                endTime: newDate, headCount: headcount,
                top: mTop, jungle: mJungle, mid: mMid,
                bottom: mBottom, support: mSupport,
                content: content, talkOn: talkOn,
            };
            dispatch(updateLolPostRequestAction(data));

        }


    }, [gameMode, headcount, startTier, endTier, endTime, top, jungle, mid, bottom, support, talkOn, title, content, isDoneUpdatePost]);

    return (
        <>
            {me.userId === detailLolPost.userId
                ? <Form style={{ margin: '20px' }}>
                    <Select
                        value={gameMode}
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
                        value={headcount}
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
                        value={startTier}
                        style={{ width: 200 }}
                        placeholder="최저 티어"
                        onChange={onSetStartTier}
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
                    ~
                    <Select
                        value={endTier}
                        style={{ width: 200 }}
                        placeholder="최고 티어"
                        onChange={onSetEndTier}
                    >
                        <Select.Option value={100}>상관없음</Select.Option>
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
                    <Select
                        style={{ width: 410 }}
                        placeholder="만료시간"
                        onChange={onSetEndTime}
                    >
                        <Select.Option value={15}>15분 뒤 만료</Select.Option>
                        <Select.Option value={30}>30분 뒤 만료</Select.Option>
                        <Select.Option value={60}>1시간 뒤 만료</Select.Option>
                        <Select.Option value={120}>2시간 뒤 만료</Select.Option>
                        <Select.Option value={180}>3시간 뒤 만료</Select.Option>
                        <Select.Option value={360}>6시간 뒤 만료</Select.Option>
                        <Select.Option value={1440}>24시간 뒤 만료</Select.Option>
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
                    </Radio.Group>
                    <br />
                    <Input placeholder={'제목'} value={title} onChange={onSetTitle} style={{ marginBottom: '20px' }}></Input>
                    <Input.TextArea placeholder={'내용'} value={content} onChange={onSetContent} style={{ height: '200px' }}></Input.TextArea>
                    <Button type="primary" loading={updateLolPostLoading} onClick={onSubmit}>제출</Button>
                </Form>
                : <div>권한이 없습니다.</div>}

        </>

    )
};



export default LolWriteFrom;