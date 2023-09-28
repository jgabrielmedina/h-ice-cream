import Card from "./Card"

function Services() {
  return (
    <div className="leading-[1.2]">
      <section className="w-full pr-[15px] pl-[15px] pb-[9rem] pt-[3rem] box-border">
        <div className="pb-[3rem] pt-[2rem] max-w-[1140px] m-auto pr-[15px] pl-[15px]">
          <div className="flex flex-wrap">
            <div className="pr-[15px]">
              <h1 className="text-[2.5rem] font-[700] mb-[3rem] max-w-[68.33%] text-start">Best Services We Provide For Our Clients</h1>
            </div>
          </div>

          <div className="flex">
            <Card
            title="Quality Maintain"
            img="img/service-1.jpg"
            description="Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo"
            />
            <Card
            title="Individual Approach"
            img="img/service-2.jpg"
            description="Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo"
            />
            <Card
            title="Celeration Ice Cream"
            img="img/service-3.jpg"
            description="Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services