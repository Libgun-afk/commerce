const Single = async ({ params }) => {
  const { id } = params;
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const oneCard = await result.json();

  return (
    <div className="flex gap-4 ">
      <div className="flex flex-col justify-between">
        <img className="w-[170px] h-[138px]" src={oneCard.image} alt="" />
        <img className="w-[170px] h-[138px]" src={oneCard.image} alt="" />
        <img className="w-[170px] h-[138px]" src={oneCard.image} alt="" />
        <img className="w-[170px] h-[138px]" src={oneCard.image} alt="" />
      </div>
      <div className="w-[500px] h-[600px] rounded-lg bg-[#F5F5F5] flex items-center justify-center">
        <img className="w-[446px] h-[315px] px-6" src={oneCard.image} alt="" />
      </div>
      <div className="flex flex-col h-[600px] w-[400px]">
        <div className="flex flex-col gap-10 ">
          <div className="font-semibold text-xl w-[304px] h-[24px]">
            {oneCard.title}
          </div>
          <div className="font-normal text-xl w-[97px] h-[24px]">
            ${oneCard.price}
          </div>
          <div className="font-normal text-sm w-[374px] h-[63px]">
            {oneCard.description}
          </div>

          <div className="flex w-[155px] h-[20px]">
            <div className="w-[83px] h-[20px] font-normal">Colours:</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
