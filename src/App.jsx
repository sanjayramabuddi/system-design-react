import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import Signup from "./pages/Auth/Signup";
// import UserAdd from "./pages/User/UserAdd";
// import UserList from "./pages/User/UserList";
// import UserUpdate from "./pages/User/UserUpdate";
// import Products from "./components/Products";
import Header from "./components/Header";
import Body from "./components/Body";
import AuthRoutes from "./routes/Auth.routes";
import UserRoutes from "./routes/User.routes";

function App() {
  const appRouter = [...AuthRoutes, ...UserRoutes];
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />

          {appRouter.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Body />} />

//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           <Route path="/user-add" element={<UserAdd />} />
//           <Route path="/user-list" element={<UserList />} />
//           <Route path="/user-update" element={<UserUpdate />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

export default App;
