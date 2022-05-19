import { useSelector } from 'react-redux';
import { Button, Form, Input, Space, Table } from "antd";
import "antd/dist/antd.css";
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { baseModel } from '../model';

const Tablecomponents = () =>{
    const list = useSelector((state:any) => state.baseReducer.list);
    console.log(list.data);
    var objNew:any=[];
    const selectorHandle=(item:baseModel)=>{
    if(objNew.includes(item)){
      const findIndex = objNew.findIndex((a:any) => a.id === item.id)
    console.log(findIndex);
    findIndex !== -1 && objNew.splice(findIndex , 1)
    console.log(objNew);
    }
    else{
    objNew.push(item);
    }
    }
    const handleclick=()=> {
      console.log(objNew);
    }
    const columns = [
        {
          title: 'FIRST NAME',
          dataIndex: 'first_name',
        },
        {
          title: 'LAST NAME',
          dataIndex: 'last_name',
        },
        {
          title: 'EMAIL',
          render:(record:any)=>{
            return(
            <>
      <Form name="dynamic_form_nest_item" autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <>
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  rules={[{ required: true, message: 'Missing mail adress' }]}
                ><>
                <div style={{ display: 'flex'}}><Input placeholder="mail" /> <DeleteOutlined  onClick={() => remove(name)} /></div>
                </>
                </Form.Item>
                
                </>
              </Space>
            ))}
            <Form.Item>
              {record.email}
              <Button id={record.id} onClick={() => add()} icon={<PlusCircleOutlined/>}/>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="default" htmlType="submit">
          add
        </Button>
      </Form.Item>
    </Form>
</>
            )
        }
        }
      ];
    return(
    <div className="TableContent">
    <Table rowKey='id' dataSource={list.data} columns={columns} pagination={false} rowSelection={{type:'checkbox',
    onSelect:(record)=>{selectorHandle(record)
    console.log()}}}>

    </Table>
    <Button type ="primary"onClick={handleclick} className="m-3">Submit</Button>
    </div>
    )
}

export default Tablecomponents;