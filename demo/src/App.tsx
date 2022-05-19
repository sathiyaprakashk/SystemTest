import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { baseAction } from './redux/actions/baseAction';
import { Button, Layout, PageHeader } from 'antd';
import MainContent from './Components/Content';
import {SearchOutlined, SettingOutlined } from '@ant-design/icons';

const App = ()  =>{
  const list = useSelector((state:any) => state.baseReducer.list);
  console.log(list);
  const dispatch = useDispatch();
  const { Header, Footer, Content } = Layout;

  useEffect(()=>{
    dispatch(baseAction.GET_LIST.request({}));
  },[dispatch]);
  return (
<Layout>
      <Header>
  <PageHeader
    ghost={false}
    className="site-page-header"
    onBack={() => null}
    title="System Test"
    subTitle="Demo page"
    extra={[
      <Button key="3" icon={<SearchOutlined/>}/>,
      <Button key="2" icon={<SettingOutlined />}/>,
    ]}
  />
      </Header>
      <Content>
        <MainContent/>
      </Content>
      <Footer>@BOSCH SYSTEM TEST</Footer>
    </Layout>
  );
}

export default App;
