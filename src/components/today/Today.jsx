export const Today = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-[100%] h-12 py-16">
        <div className="flex items-center gap-4">
          <img className="w-5 h-10" src="today's/image.png" alt="" />
          <div>Today’s</div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="w-[211px] h-12 font-semibold text-4xl">
              Flash Sales
            </div>
            <div>component irne</div>
          </div>

          <div className="flex ">
            <div className="rounded-full bg-slate-200 flex justify-center items-center w-[46px] h-[46px] ">
              <img
                className="w-4 h-[14px]  items-center justify-center"
                src="today's/image copy.png"
                alt=""
              />
            </div>
            <div className="rounded-full flex justify-center items-center bg-slate-200 w-[46px] h-[46px]">
              <img
                className="w-4 h-[14px]"
                src="today's/image copy 2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
