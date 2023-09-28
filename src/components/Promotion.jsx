
function Promotion() {
  return (
    <div>
    <div className="hidden md:block mt-12 mb-12 pt-12 pb-12 pr-0 pl-0">

      <div className="flex m-0 bg-[#F195B2] flex-wrap max-h-[431px]">
        <div className="min-h-[431px] w-[50%] max-h-[431px]">
          <div className="h-full min-h-[431px]">
            <img className="max-w-full  max-h-full object-cover w-full " src="img/promotion.jpg" alt="foto" />
          </div>
        </div>

        <div className="w-[50%]">
          <div className="text-center p-[3rem]">
            <div className="">
              <h3 className="w-[100px] h-[100px] rounded-full bg-white font-[700] text-[#62C3E7] text-[1.75rem] pt-[1.7rem] m-auto">$199</h3>
            </div>
            <h3 className="font-[700] text-white text-[1.75rem] py-[1.5rem]">Chocolate Ice Cream</h3>
            <p className="text-white mb-[1.5rem]">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
              justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
            <button className="bg-[#62C3E7] text-white font-[500] mt-2 px-[25px] py-[10px] rounded-full">Order Now</button>
          </div>
        </div>

      </div>

      
    </div>
    <div className="md:hidden bg-[#F195B2]">
        <div>
          <div>
            <div>
              <img className="max-w-full  max-h-full object-cover w-full " src="img/promotion.jpg" alt="foto" />
            </div>
            <div className="w-[100%] m-auto">
              <div className="text-center py-[3rem] px-4">
                <div className="">
                  <h3 className="w-[100px] h-[100px] rounded-full bg-white font-[700] text-[#62C3E7] text-[1.75rem] pt-[1.7rem] m-auto">$199</h3>
                </div>
                <h3 className="font-[700] text-white text-[1.75rem] py-[1.5rem]">Chocolate Ice Cream</h3>
                <p className="text-white mb-[1.5rem]">Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                <button className="bg-[#62C3E7] text-white font-[500] mt-2 px-[25px] py-[10px] rounded-full">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion