import React, { useEffect, useRef } from 'react';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          backgroundColor: 'teal',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(0, 0, 0)',
          transition: 'transform 0.01s linear',
        }}
      />
    </>
  );
}

export default App;


































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

