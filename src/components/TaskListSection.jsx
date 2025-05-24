function TaskListSection({ tasks }) {
  return (
    <div>
        <div className="flex items-center gap-2 text-xl font-bold mb-4">
            <img src="public\Future.png" alt="icon" className="w-6 h-6" />
            待辦事項
        </div>      
        <ul className="space-y-4">
        {tasks.map((task, i) => (
          <li
            key={i}
            className="border rounded-xl p-4 flex items-start justify-between"
          >
            <div>
              <div className="text-sm text-gray-500">{task.startDate}</div>
              <div className="font-semibold">{task.title}</div>
              <div className="text-sm text-gray-500">
                {task.startTime} ~ {task.endTime}
              </div>
              {task.description && (
                <div className="text-xs text-gray-400 truncate">
                  {task.description}
                </div>
              )}
            </div>
            <input type="checkbox" className="checkbox checkbox-sm mt-1" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskListSection;
