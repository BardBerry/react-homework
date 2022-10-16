import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Comment from "./components/Comment/Comment";
import Input from "./components/Input/Input";
import { Modal } from "./components/ModalContainer/ModalContainer";
import Tag from "./components/Tag/Tag";
import TagSelector from "./components/TagSelector/TagSelector";
import TaskCard from "./components/TaskCard/TaskCard";
import Main from "./pages/Main/Main";
import Ticket from "./pages/Ticket/Ticket";
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main modal={'close'}/>} />
      <Route path="/create" element={<Main modal={'create'} />} />
      <Route path="/edit/:id" element={<Main modal={'edit'} />} />
      <Route path="/full/:id" element={<Ticket />} />
    </Routes>
  );
}