function TodayList({ data }) {
    return (
        <div className="w-2/5 bg-base-100 px-[2rem] py-[1rem] border-1 rounded-lg border-base-content h-full">
            
            <span className="text-[2rem]">今日行程</span>
            
            <section className="grid gap-[1rem] list mt-[1rem]">

                {data.map((task, index) => (
                    <div key={index} className="list-row py-2 px-6 border-1 rounded-lg border-base-content">
                        <div className="flex flex-row gap-[0.5rem] list-col-grow items-center">
                            <div aria-label="status" className="status bg-[#8FE189]"></div>
                            <span className="">{task.startTime}</span>
                            <p>{task.title}</p>
                        </div>
                        <input type="checkbox" className="checkbox border-base-content bg-base-100 checked:bg-base-content checked:text-base-100 checked:border-base-100 " />
                    </div>
                ))}

            </section>
        </div>
    );
}

export default TodayList;