import React from 'react';
import { connect } from 'react-redux'
import './Home.css';
import {  Route, Switch} from "react-router-dom";
import {
    Layout, Menu, Icon,
} from 'antd';


import DataOverview from '../../components/DataOverview/DataOverview.jsx'
import AllVenues from '../../components/AllVenues/AllVenues.jsx'
import AddVenue from '../../components/AddVenue/AddVenue.jsx'
import AllGoods from '../../components/AllGoods/AllGoods.jsx'
import AddGoods from '../../components/AddGoods/AddGoods.jsx'
import Classification from '../../components/Classification/Classification.jsx'
import BackgroundAccount from '../../components/BackgroundAccount/BackgroundAccount.jsx'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const routes = [
    {
        path: "/home/DataOverview",
        exact: true,
        main: DataOverview
    },
    {
        path: "/home/AllVenues",
        exact: true,
        main: AllVenues
    },
    {
        path: "/home/AddVenue",
        exact: true,
        main: AddVenue
    },
    {
        path: "/home/AllGoods",
        exact: true,
        main: AllGoods
    },
    {
        path: "/home/AddGoods",
        exact: true,
        main: AddGoods
    },
    {
        path: "/home/Classification",
        exact: true,
        main: Classification
    },
    {
        path: "/home/BackgroundAccount",
        exact: true,
        main: BackgroundAccount
    },
];

function tz(e) {
    // console.log(e.key)
    // console.log(routes[e.key * 1].path)
    if ((e.key * 1) < 7) {
        this.props.history.push(routes[e.key * 1].path)
    }

}


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            defaultSelectedKeys: ["0"]
        }
    }

    componentWillMount() {
        // console.log("根据链接更改列表选中")
        // console.log(this.props.location.pathname);
        routes.forEach((nr, x) => {
            if (nr.path ===this.props.location.pathname) {
                // console.log(nr, x)
                // this.setState({ defaultSelectedKeys: ['"'+x+'"'] });
                this.setState({
                    defaultSelectedKeys:[String(x)]
                // console.log(this.state.defaultSelectedKeys)
                })
            }
        });



    }

    render() {
        return (
            // <Router>
            <Layout className="home">
                <Header className="header">
                    <div className="logo">
                        大麦网后台
                    </div>
                    <div className="username">
                        大魔王
                    </div>
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu> */}
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={this.state.defaultSelectedKeys}
                            defaultOpenKeys={["sub1", "sub2"]}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={tz.bind(this)}
                        >
                            <Menu.Item key="0">
                                <Icon type="pie-chart" />
                                <span>数据概览</span>
                            </Menu.Item>

                            <SubMenu key="sub1" title={<span><Icon type="home" />场馆管理</span>}>
                                <Menu.Item key="1">所有场馆</Menu.Item>
                                <Menu.Item key="2">添加场馆</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={<span><Icon type="shop" />商品管理</span>}>
                                <Menu.Item key="3">所有商品</Menu.Item>
                                <Menu.Item key="4">发布商品</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="5">
                                <Icon type="bars" />
                                <span>分类管理</span>
                            </Menu.Item>

                            <Menu.Item key="6">
                                <Icon type="setting" />
                                <span>后台账号管理</span>
                            </Menu.Item>

                            <Menu.Item key="7" >
                                <Icon type="export" />
                                <span>退出账号</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}

                        {/* 右侧容器 */}
                        <Content style={{
                            background: '#fff', padding: 24, margin: 0, marginTop: 25, minHeight: 280,
                        }}
                        >

                            {/* <Switch>
                                    <Route exact path="/home" render={() => <Redirect to='/home/DataOverview'></Redirect>}></Route>
                                    <Route path="/home/DataOverview" component={DataOverview} />
                                    <Route path="/home/AllVenues" component={AllVenues} />
                                    <Route path="/home/AddVenue" component={AddVenue} />
                                    <Route path="/home/AllGoods" component={AllGoods} />
                                    <Route path="/home/AddGoods" component={AddGoods} />
                                    <Route path="/home/Classification" component={Classification} />
                                    <Route path="/home/BackgroundAccount" component={BackgroundAccount} />
                                </Switch> */}
                            <Switch>
                                {routes.map((route, index) => (

                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))}
                            </Switch>
                        </Content>

                    </Layout>
                </Layout>
            </Layout>
            // </Router>
        );
    }
}

export default connect(
    (state) => {
        // console.log(state)
        return state
    },
    (dispatch) => {
        return {

        }
    }
)(Home);
