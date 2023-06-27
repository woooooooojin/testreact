import React from 'react'
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from 'react-redux'
import { changeName, changeYear } from './store';


export default function Cart() {

  const state = useSelector((state)=>state)
  const dispatch = useDispatch()
  

  return (
    <div>

      <h2><span style={{color:'blue'}}>({state.user.name})</span>장바구니</h2>
      <h3>회원가입기간 : {state.user.memberYear}</h3>
      <button onClick={()=>dispatch(changeYear(1))}>+</button>
      <button onClick={()=>dispatch(changeYear(-1))}>-</button>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>개수</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        
        </tbody>
    </Table>
    </div>
  )
}
