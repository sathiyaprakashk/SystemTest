import { Input, Tabs } from 'antd';
import "antd/dist/antd.css";
import Tablecomponents from './TableComponents';
import {SearchOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;

const MainContent =()=>{
    return(
    <div className='container'>
      <div className='normal'></div>
    <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1" className='container'>
     <h3 className='head'>RECENT UPDATES</h3>
     <Input className='pl-5' size="large" placeholder="search" prefix={<SearchOutlined />} />
     <div className="row px-5 mt-5">
    <div className="col acol p-2">
    Create equal-width columns that span multiple rows by inserting a .w-100 where you want the columns to break to a new line. Make the breaks responsive by mixing the .w-100 with some
    </div>
    <div className="col bcol mx-3 p-2">
    We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.
    </div>
    <div className="col ccol p-2">
    If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to.
    </div>
  </div>
  <div className="row mb-5 mt-3 px-5">
  <div className="col dcol">
  React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
    </div>
    <div className="col ecol mx-3 p-2">
    Create equal-width columns that span multiple rows by inserting a .w-100 where you want the columns to break to a new line. Make the breaks responsive by mixing the .w-100 with some
    </div>
    <div className="col fcol p-2">
    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
    </div>
  </div>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      <Tablecomponents/>
    </TabPane>
  </Tabs>
  </div>
    )

}

export default MainContent;