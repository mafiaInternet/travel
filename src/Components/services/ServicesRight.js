import services from "../../data/services"
import {BiChevronRight} from 'react-icons/bi'
import { useState, useEffect, memo } from "react";

const ServicesRight = () => {
    const [current, setCurrent] = useState(0);
    function abc(index){
      setCurrent(index)
     
      
    }
   
    return services.length > 0
        ? services.map((service, index) => (
        <div className="services__contents__right" key={index}>
           <button className="services__contents__right__heading" onClick={() => abc(index)}>{service.heading}</button>
           <div className={`services__contents__right__details ${
                current === index ? 'services__contents__right__details--show' : ''
            }`}>
                <p>{service.p}</p>
           </div>
        </div>
        ))
        : ''
}

export default memo(ServicesRight)



{/* <ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non ratione quae sequi repellendus minima amet nemo commodi, qui debitis, dolor beatae maxime quia aliquam officia dolorum? Veritatis saepe ipsum, optio exercitationem quo libero, at asperiores nam rem, non fugit? Ratione asperiores quas porro minus cumque veniam, provident voluptatibus ex et vel a beatae architecto debitis ullam ut illo. Exercitationem repellendus in eius accusamus saepe porro voluptatem nulla natus dolor, id debitis error fugiat voluptas tempora explicabo totam alias, libero ex. Exercitationem aliquam incidunt molestias eius id harum sit hic asperiores dolores at inventore maxime, animi nihil doloremque debitis autem.</li>
</ul> */}