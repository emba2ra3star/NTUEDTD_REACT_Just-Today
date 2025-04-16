function TodayList() {
    return (
        <div className="w-2/5 bg-base-100 px-[2rem] py-[1rem] border-1 rounded-lg border-base-content min-h-screen">
            <span>今日行程</span>
            <section className="grid gap-[1rem]">
                <div className="flex flex-row py-2 px-2 justify-between border-1 rounded-lg border-base-content">
                    <div className="justify-items-start flex flex-row gap-[0.5rem]">
                        <span>。</span>
                        <span>9:00</span>
                        <p>title</p>
                    </div>
                    <div className="justify-end">
                    <input type="checkbox" defaultChecked className="checkbox border-base-content bg-base-100 checked:bg-base-content checked:text-base-100 checked:border-base-100 " />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TodayList;