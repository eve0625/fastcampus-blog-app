import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home'
import PostList from '../pages/posts';
import PostDetail from '../pages/posts/detail';
import PostNew from '../pages/posts/new';
import PostEdit from '../pages/posts/edit';
import Profile from '../pages/profile';
import Login from '../pages/login';
import SignUp from '../pages/signup';

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<PostList/>} />
        <Route path="/posts/:id" element={<PostDetail/>} />
        <Route path="/posts/new" element={<PostNew/>} />
        <Route path="/posts/edit/:id" element={<PostEdit/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Default Path */}
    </Routes>
  );
};