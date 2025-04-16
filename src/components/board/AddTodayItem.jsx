function AddTodayItem() {
    return (
        <>
            <div className="flex flex-row h-fit px-[2rem] py-[1rem] items-center justify-between gap-[1rem] bg-base-100  border-1 rounded-lg border-base-content">
                {/* 送出按鈕 */}
                <input type="checkbox" defaultChecked className="mt-[1.5rem] checkbox border-base-content bg-base-100 checked:bg-base-content checked:text-base-100 checked:border-base-100 " />
                {/* 事項名稱 */}
                <div className="w-[100%] flex flex-col">
                    <span>事項名稱</span>
                    <input type="text" placeholder="輸入工作項目" className="input border-1 rounded-lg border-base-content" />
                    {/* <div className="border-1 rounded-lg border-base-content">輸入工作項目</div> */}
                </div>
                {/* 開始時間 */}
                <div className="w-[16rem]">
                    <span>開始時間</span>
                    <input type="time" className="input border-1 rounded-lg border-base-content"/>
                </div>
                {/* 結束時間 */}
                <div className="w-[16rem]">
                    <span>結束時間</span>
                    <input type="time" className="input border-1 rounded-lg border-base-content"/>
                </div>
            </div>
        </>
    );

}

export default AddTodayItem;