/* eslint-disable no-unused-vars */
import { useMouseMove, useValue, animate } from "react-ui-animate";



function App() {
  const x = useValue(0);
  const y = useValue(0);
  const CURSOR_SIZE = 20;

  useMouseMove(({ mouseX, mouseY }) => {
    x.value = mouseX - CURSOR_SIZE / 2;
    y.value = mouseY - CURSOR_SIZE / 2;
  });

  return (
    <animate.div
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        backgroundColor: "teal",
        borderRadius: "50%",
        translateX: x.value,
        translateY: y.value,
      }}
    />
  );
}
export default App

































// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// function App() {
//   const [product, setProduct] = useState([]);
//   const [page, setPage] = useState(0);
//   const pageLimit = 10;
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${pageLimit}`);
//       setProduct(res.data);
//       setPage(pageLimit);
//     } catch (error) {
//       console.error('Error fetching initial products:', error);
//     }
//   };

//   const fetchMoreData = async () => {
//     try {
//       const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${pageLimit}`);
//       const newData = res.data;

//       setProduct((prevItems) => [...prevItems, ...newData]);
//       setPage((prev) => prev + pageLimit);

//       if (newData.length < pageLimit) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more products:', error);
//     }
//   };

//   return (
//     <InfiniteScroll
//       dataLength={product.length}
//       next={fetchMoreData}
//       hasMore={hasMore}
//       loader={<div className="text-center p-4">Loading...</div>}
//       endMessage={<p className="text-center text-gray-500">No more products to load.</p>}
//     >
//       <div className="w-full min-h-screen flex flex-col items-center gap-4 text-black p-4">
//         {product.map((item) => (
//           <p>{item.title}</p>
//         ))}
//       </div>
//     </InfiniteScroll>
//   );
// }

// export default App;

