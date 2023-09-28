import FirstSection from "../components/FirstSection"
import Promotion from "@/components/Promotion"
import Services from "../components/Services"

function HomePage() {
  return (
    <div className="bg-[#F3F6FF]">
    <FirstSection/>
    <Promotion/>
    <Services/> 
    </div>
  )
}

export default HomePage