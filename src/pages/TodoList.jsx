import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NavMenu from "../components/NavMenu";
import FormSection from "../components/todolist/FormSection";
import TaskListSection from "../components/todolist/TaskListSection";

export default function TodoList() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endTime: "",
    tags: [],
  });

  const [tasks, setTasks] = useState([]);

  return (
    <div className="main_layout text-black">
      <Helmet>
        <title>Just Today | 代辦事項</title>
      </Helmet>

      {/* 主內容區：左右兩欄 */}
      <div className="content flex mt-[5rem]">
        {/* 左側 NavMenu，傳入 pageTitle 確保高亮 */}
        <NavMenu pageTitle="代辦事項" />

        {/* 右側內容 */}
        <div className="flex-1 p-6 flex gap-6">
          {/* 任務清單 */}
          <div className="w-1/2 bg-white p-6 rounded-2xl shadow">
            <TaskListSection tasks={tasks} />
          </div>

          {/* 新增工作 */}
          <div className="w-1/2 bg-white p-6 rounded-2xl shadow">
            <FormSection
              formData={formData}
              setFormData={setFormData}
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        </div>
      </div>

      <div className="footer" />
    </div>
  );
}
