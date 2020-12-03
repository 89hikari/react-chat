import React, { Component } from 'react'
import { Route } from "react-router-dom";
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { TeamOutlined, FormOutlined, AudioOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Input } from "antd";
import tinycolor from "tinycolor";

import { Message, DialogItem, Dialogs, Status } from "components";

import './Home.scss'
import { InputChat } from '../../components';

const { Search } = Input;
const onSearch = value => console.log(value);

const Home = () => (
    <section className="home">

        <div className="chat">
            <div className="chat__sidebar">

                <div className="chat__sidebar-header">
                    <div>
                        <TeamOutlined />
                        <span>Dialog list</span>
                    </div>
                    <FormOutlined className="chat__sidebar-header-searchicon" />
                </div>

                <div className="chat__sidebar-search">
                    <Search
                        placeholder="Search dialogs here"
                        allowClear
                        onSearch={onSearch}
                    />
                </div>

                <div className="chat__sidebar-dialogs">
                    <div className="dialogs">
                        <Dialogs
                            userId={0}
                            items={[
                                {
                                    _id: "b80b141a5a76ea5e8a8c2d6fb5b8c57c",
                                    text: "Привет ...",
                                    created_at: new Date(2010, 10, 1, 23, 44, 55),
                                    user: {
                                        id: 'b80b141a5a76ea5e8a8c2d6fb5b8c57c',
                                        fullname: "Vladislav Belousov",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "4e258a7b25dbe85b4e73cceb5ca79d05",
                                    text: "Пока",
                                    created_at: new Date(2019, 10, 1, 23, 44, 55),
                                    user: {
                                        id: 'b80b141a5a76ea5e8a8c2d6fb5b8c57c',
                                        fullname: "Виталя",
                                        avatar: "https://sun9-25.userapi.com/c846016/v846016285/121a1/vzkOFkXzsac.jpg?ava=1"
                                    }
                                },
                                {
                                    _id: "8a1a17e049499fb3b978d1e11b4f7693",
                                    text: "Снова привет",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: 'b80b141a5a76ea5e8a8c2d6fb5b8c57c',
                                        fullname: "Богдан",
                                        avatar: "https://sun9-38.userapi.com/impg/PEJkBQAfbcGjSMiwfQyVcs2BtSsHxuMocu2iag/524mAy6BNdU.jpg?size=1617x2160&quality=96&proxy=1&sign=54212a0d79597d86811e562f8a9b3578"
                                    }
                                },
                                {
                                    _id: "5fc9553fbd2a0f2421ae5343",
                                    text: "Laboris deserunt mollit deserunt excepteur excepteur minim ut proident laboris aliqua sint.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fd15d6398803ecf51",
                                        fullname: "Mckay Francis",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f78445b734766622b",
                                    text: "Quis ullamco ex officia consequat.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553feecd02f88101bb00",
                                        fullname: "Henry Dixon",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f71f711a907a261a8",
                                    text: "Esse cupidatat non aliquip cillum.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fa344f414a7603745",
                                        fullname: "Judith Beck",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f966d9ab99171b767",
                                    text: "Consequat labore anim sint elit laborum dolor excepteur Lorem in commodo aliqua culpa.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f7fd6b2bb86a4444c",
                                        fullname: "Chavez Chaney",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553fcbaff77a9a9061d5",
                                    text: "Nulla anim est sint in nostrud exercitation fugiat esse duis.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553ffac37dd4cef6a1c4",
                                        fullname: "Twila Butler",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f5c844ba08a2efbb2",
                                    text: "Pariatur ullamco esse dolor in.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fca3d379eb2b31689",
                                        fullname: "Maryann Phelps",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553ff5cf95db017e53c7",
                                    text: "Dolore proident nostrud sunt aliquip officia ut nulla ad reprehenderit velit sit velit.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fe4792f1e14dec6a3",
                                        fullname: "Hattie Brewer",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553fdcd902bbb093b306",
                                    text: "Aliqua do in laborum sint proident veniam laborum non excepteur voluptate occaecat eu ipsum laboris.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f592694ab272e414f",
                                        fullname: "Kerry Chapman",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f890e70139a84f182",
                                    text: "Voluptate duis ut nulla consectetur reprehenderit nulla magna.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fa197f7198eec8cd9",
                                        fullname: "Beulah Meyers",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f37adb019fa81d06b",
                                    text: "Dolor sunt incididunt minim ex exercitation ad.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553ff03c1a4ce9dc6f5b",
                                        fullname: "Velez Carlson",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f7f67f8711d3a40b6",
                                    text: "Nulla consequat laboris aliqua anim aliqua non elit tempor Lorem est fugiat voluptate mollit.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f43284b81c860cc01",
                                        fullname: "Hahn Wooten",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f61fbb9c5e391e243",
                                    text: "Et consequat incididunt cupidatat consectetur pariatur non esse aute laboris.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fc066c27f52a30932",
                                        fullname: "Mccray Kemp",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f4f4865474e7e3bb6",
                                    text: "Proident eiusmod ad enim ipsum officia deserunt ullamco.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fc0a9e6924e540cb7",
                                        fullname: "Copeland Daniels",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553ffbf559eaf592e69b",
                                    text: "Labore mollit do est ex consequat.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553fea23db51172f1a41",
                                        fullname: "Robbins Conway",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f718ecd2fb68ee3af",
                                    text: "Velit irure dolore id veniam velit ex.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553ff5d5a111030918d8",
                                        fullname: "Christian Atkinson",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553fbeab4c7a1fea2095",
                                    text: "Eu nulla velit est qui voluptate amet nisi ut veniam qui.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f40ef83a42f9cce72",
                                        fullname: "Gentry Burt",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f02440899d60fc083",
                                    text: "Lorem excepteur in duis do ex.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f9ad35be2d61bcae7",
                                        fullname: "Bonner Miranda",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553fe507a8df00a8d90f",
                                    text: "Officia labore commodo et sunt adipisicing dolor reprehenderit reprehenderit.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f5c49f3b02d7713a5",
                                        fullname: "Buckley Burch",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f87352bfed191f492",
                                    text: "Velit sint enim ullamco laborum et velit aliqua cupidatat ullamco laboris non.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f9a1c5b17cd2fc40f",
                                        fullname: "Dudley Osborne",
                                        avatar: null
                                    }
                                },
                                {
                                    _id: "5fc9553f98c2c37c0298e87e",
                                    text: "Nostrud pariatur sunt reprehenderit officia dolor sint ex.",
                                    created_at: new Date(2009, 10, 1, 23, 44, 55),
                                    user: {
                                        id: "5fc9553f489d75cec2304849",
                                        fullname: "Kaye Mcgowan",
                                        avatar: null
                                    }
                                }
                            ]}
                        />
                    </div>
                </div>

            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Vladislav Belousov</b>
                        <div className="chat__dialog-header-status">
                            <Status online />
                        </div>
                    </div>
                    <EllipsisOutlined style={{ fontSize: "25px" }} />
                </div>
                <div className="chat__dialog-messages">
                    
                    <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />
                         <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />
                         <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />
                         <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />
                         <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />
                         <Message
                        avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
                        text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
                        date={new Date(2020, 10, 1, 23, 44, 55)}
                        isMe={false} />
                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
                        date={new Date(2020, 10, 1, 23, 52, 55)}
                        isMe={true}
                        isReaded={false} />

                    <Message
                        avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
                        isTyping />
                </div>
                            <div className="chat__dialog-input">
                            <InputChat />
                            </div>
            </div>
        </div>
        {/*<div className="dialogs">
            <DialogItem user={{
                fullname: 'Vladislav Belousov',
                isOnline: true
            }}
            unreaded={0}/>
            <DialogItem user={{
                fullname: 'Vanya Tumakov',
                isOnline: false
            }}
            unreaded={0}/>
            <DialogItem user={{
                fullname: 'Vladislav Belousov',
                isOnline: true
            }}
            unreaded={2}/>
        </div>


        <Message
            avatar="https://sun1-16.userapi.com/impg/1vpwAguMrPdvMCewriWWmXbD_qlxQfho1d0alg/xO9Z3Tg0SlE.jpg?size=200x0&quality=90&crop=39,259,772,772&sign=31f6de9bf7a33835a4c41bcfe6f9a738&ava=1"
            text="Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jewsSalam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews Salam Aleykoom, let's kill some jews"
            date={new Date(2020, 10, 1, 23, 44, 55)}
            isMe={false} />
        <Message
            avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
            text="Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go Ok let's go "
            date={new Date(2020, 10, 1, 23, 52, 55)}
            isMe={true}
            isReaded={false} />

        <Message
            avatar="https://sun1-84.userapi.com/impg/jHnucCxXDejZhQe6AbwVTAZtzqBjspRkr4QykQ/_9HK6ls2YmA.jpg?size=200x0&quality=90&crop=102,1,2158,2159&sign=702a94befa58106ac4703a448ebc0221&ava=1"
        isTyping />
*/}


    </section>
);

Home.propTypes = {
    date: PropTypes.string
};

export default Home;