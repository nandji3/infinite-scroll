/* eslint-disable no-unused-vars */
import { useMouseMove, useValue, animate } from "react-ui-animate";



function App() {
  const x = useValue(0);
  const y = useValue(0);
  const CURSOR_SIZE = 10;

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


































// import { useEffect, useState } from 'react'
// import './App.css'
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';

// function App() {

//   const [product, setProduct] = useState([]);
//   const [page, setPage] = useState(2);
//   const pageLimit = 10;
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     const featchProduct = async () => {
//       try {
//         const res = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${1}&limit=${pageLimit}`)
//         if (res && res.data) {
//           setProduct(res.data);
//         }
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     featchProduct()
//   }, [])


//   const fetchMoreData = () => {
//     try {
//       const res = axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${pageLimit}`)

//       setProduct((prevItems) => [...prevItems, ...res.data]);

//       res?.data.length > 0 ? setHasMore(true) : setHasMore(false);

//       setPage((prev) => prev + 1);

//     } catch (error) {
//       console.log(error)
//     }

//   };

//   return (
//     <>
//       <InfiniteScroll
//         dataLength={product.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<div>Loading....</div>}
//       >
//         <div className='w-full h-[100vh] flex flex-col item-center gap-[1rem] text-black'>
//           {product &&
//             product?.map((item) => {
//               return (
//                 <div key={item?.id}>
//                   <p>{item?.title}</p>
//                 </div>
//               )
//             })}
//         </div>
//       </InfiniteScroll>
//     </>
//   )
// }

// export default App
