import styled from "styled-components"


const TableList = ({ list }) => (

    <Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Quantidade</th>
                <th>Carboidratos</th>
                <th>Gorduras</th>
            </tr>
        </thead>
        <tbody>
            {list?.map((v, i) => (
                <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.quantidade}</td>
                    <td>{v.carboidratos}</td>
                    <td>{v.gorduras}</td>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default TableList;

const Table = styled.table`
      background-color: #f2f2f2;
      border-collapse: collapse;
      border-spacing: 0;
      font-family: 'Lato', sans-serif;
      width: 85%;
      border: 1px solid #ddd;
      border-radius:5px;
      margin-bottom: 100px;


      tbody{
        display: block;
        max-height: 500px;
        overflow-y: scroll;
      }
      tr{
        display: table;
        width: 100%;
        table-layout: fixed;
            th{
                background-color: #E5E9F2;
            }
            th, td {
                text-align: left;
                padding: 16px;
            }
            &:nth-child(even) {
             background-color: #eee;
            }
      }

       

       

`