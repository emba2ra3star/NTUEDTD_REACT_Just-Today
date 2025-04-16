function BoardTodoList() {
    return (
        <div className="h-[100%] px-[2rem] py-[1rem] bg-base-100 border-1 rounded-lg border-base-content">
            <span>代辦事項</span>
            <section className="grid gap-[1rem]">
                <div>
                    <div className="flex flex-row gap-[1rem]">
                        <p>3/28</p>
                        <p>完成英文雜誌文章學習一篇</p>
                    </div>
                    <div className="divider my-0"></div>
                </div>
            </section>
        </div>
    );
}

export default BoardTodoList;