import React, {useState} from 'react'
import {Modal} from 'antd'
import {Dialogs} from '../../containers'
import { TeamOutlined, FormOutlined } from "@ant-design/icons";

const Sidebar = ({ user }) => {

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    }

    return (
        <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div>
                        <TeamOutlined />
                        <span>Dialog list</span>
                    </div>
                    <FormOutlined onClick={() => setVisible(true)} className="chat__sidebar-header-searchicon" />
                </div>
                <div className="chat__sidebar-dialogs">
                    <div className="dialogs">
                        <Dialogs
                            userId={0}
                        />
                    </div>
                    <Modal
                        title="Search user"
                        visible={visible}
                        onOk={onClose}
                        onCancel={onClose}
                        okText="Search"
                        cancelText="Cancel"
                        >
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                        <p>Bla bla ...</p>
                    </Modal>
                </div>
            </div>
    );
}

export default Sidebar;