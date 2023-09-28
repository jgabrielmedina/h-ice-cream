
function FirstSection() {
  return (
    <div className="leading-[1.2]">
      <div className="brightness-[0.7] w-full" >
        <img className="w-full" src="img/carousel-1.png" alt="Image" />
      </div>

      <section className="w-full pr-[15px] pl-[15px] pb-[3rem] pt-[3rem] box-border">
        <div className="pb-[3rem] pt-[3rem] max-w-[1140px] m-auto pr-[15px] pl-[15px]">
          <div className="flex justify-center flex-wrap">
            <div className="pr-[15px] pl-[15px]">
              <h1 className="text-[1.5rem] md:text-[2.5rem] font-[700] text-center mb-[3rem] max-w-[1200px] md:max-w-[58.33%] m-auto">Traditional & Delicious Ice Cream Since 1950</h1>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <div className="pb-[3rem] pt-[3rem] md:pr-[15px] md:pl-[15px] max-w-[100%] md:max-w-[33.3333%]">
              <h4 className="font-[700] mb-[1rem] text-[1.5rem]">About Us</h4>
              <h5 className="mb-[1rem] text-[#6c757d] font-[500] text-[1.25rem]">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
              <p className="mb-[1rem]">Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
              <button className="bg-[#62C3E7] text-white font-[500] mt-2 px-[25px] py-[10px] rounded-full">Learn More</button>
            </div>

            <div className="min-h-[400px] max-w-[100%] md:max-w-[33.3333%] md:pr-[15px] md:pl-[15px] ">
              <div className="h-full">
                <img className="w-full h-full object-cover rounded-md" src="img/about.jpg" alt="foto" />
              </div>
            </div>

            <div className="pb-[3rem] pt-[3rem] md:pr-[15px] md:pl-[15px] max-w-[100%] md:max-w-[33.3333%]">
              <h4 className="font-[700] mb-[1rem] text-[1.5rem]">Our Features</h4>
              <p className="mb-[1rem]">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
              <h5 className="text-[#6c757d] mb-4 font-[500] text-[1.25rem]">Eos kasd eos dolor</h5>
              <h5 className="text-[#6c757d] mb-4 font-[500] text-[1.25rem]">Eos kasd eos dolor</h5>
              <h5 className="text-[#6c757d] mb-4 font-[500] text-[1.25rem]">Eos kasd eos dolor</h5>
              <button className="bg-[#F195B2] text-white font-[500] mt-2 px-[25px] py-[10px] rounded-full">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstSection