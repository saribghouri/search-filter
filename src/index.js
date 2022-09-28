import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const itemList = [
  "Apple",
  "Orange",
  "Banana",
  "Cherry",
  "Milk",
  "Peanuts",
  "Butter",
  "Tomato",
];

// const [filteredList, setFilteredList] = new useState(itemList);

// const filterBySearch = (event) => {
//   // Access input value
//   const query = event.target.value;
//   // Create copy of item list
//   var updatedList = [...itemList];
//   // Include all elements which includes the search query
//   updatedList = updatedList.filter((item) => {
//     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
//   // Trigger render with updated values
//   setFilteredList(updatedList);
// };