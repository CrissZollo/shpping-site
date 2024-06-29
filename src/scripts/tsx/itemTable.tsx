
import "../css/itemTable.css"
import itemList from "../../itemList.json"

export default function ItemTable() {
    return (
        <div className="itemTableContainer">

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.itemList.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>-   0   +</td>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>
    )
  }