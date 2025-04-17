function TodayList({ data }) {
    return (
        <div className="lg:w-2/5 bg-base-100 px-[2rem] py-[1rem] border-1 rounded-lg border-base-content h-full">
            
            <span className="text-[20px] sm:text-[2rem]">今日行程</span>
            
            <section className="grid gap-[1rem] list mt-[1rem]">

                {data&&data.length > 0 ? data.map((task, index) => (
                    <div key={index} className="list-row py-2 px-6 items-center text-[14px] md:text-[1rem] border-1 rounded-lg border-base-content">
                        <div className="flex flex-row flex-wrap gap-[0.5rem] list-col-grow items-center">
                            <div aria-label="status" className="hidden sm:block status bg-[#8FE189]"></div>
                            <span className="text-wrap">{task.startTime}</span>
                            <p>{task.title}</p>
                        </div>
                        <input type="checkbox" className="checkbox border-base-content bg-base-100 checked:bg-base-content checked:text-base-100 checked:border-base-100 "/>
                    </div>
                )):<p className="text-center">沒有任何行程</p>}

            </section>
        </div>
    );
}

export default TodayList;