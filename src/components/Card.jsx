function Card(props) {
   
    return (
        <div className="w-[350px] mr-[35px]">
            <div className="box-border">
                <div className="relative w-[150px] h-[150px] m-auto bg-white rounded-full z-[1]">
                    <div className="absolute top-[15px] right-0 bottom-[-15px] left-0 bg-[#F195B2] rounded-full z-[-1]"> </div>
                    <img className="p-[1rem] rounded-full bg-white" src={props.img} alt="foto" />
                </div>
                <div className="text-center bg-white rounded p-[1.5rem] pb-[3rem] mt-[-75px]">
                    <h5 className="font-[600] pt-12 mt-12 mb-4 text-[1.25rem]">{props.title}</h5>
                    <p className="font-normal">{props.description}</p>
                    <button className="text-[#62C3E7] border-b-[1px] border-[#62C3E7] pt-8 ">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card