// import React, { useState, useEffect } from 'react';
// import { Table, Button } from 'react-bootstrap';
// import MenuItemForm from './MenuItemForm';

// const MenuList = () => {
//   const [menu, setMenu] = useState([]);
//   const [editingItem, setEditingItem] = useState(null);

//   useEffect(() => {
//     // Fetch menu items from the server here
//     // and update the state using setMenu
//   }, []);

//   const handleAddItem = () => {
//     setEditingItem({ name: '', price: '' });
//   };

//   const handleEditItem = (itemId) => {
//     setEditingItem(menu.find((item) => item.id === itemId));
//   };

//   const handleDeleteItem = (itemId) => {
//     // Delete the menu item with the given ID from the server
//     // and update the state using setMenu
//   };

//   const handleCancel = () => {
//     setEditingItem(null);
//   };

//   const handleSubmit = (item) => {
//     // Save the item to the server and update the state using setMenu and setEditingItem
//   };

//   const handleChange = (event) => {
//     setEditingItem({
//       ...editingItem,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <>
//       {editingItem ? (
//         <MenuItemForm
//           item={editingItem}
//           handleChange={handleChange}
//           handleSubmit={handleSubmit}
//           handleCancel={handleCancel}
//         />
//       ) : (
//         <Button onClick={handleAddItem}>Add Item</Button>
//       )}
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menu.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.price}</td>
//               <td>
//                 <Button onClick={() => handleEditItem(item.id)}>Edit</Button>
//                 <Button onClick={() => handleDeleteItem(item.id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// };

// export default MenuList;
