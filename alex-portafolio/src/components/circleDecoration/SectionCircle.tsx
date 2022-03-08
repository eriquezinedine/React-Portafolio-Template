import { useSize } from '../../hooks/useSize'
import Circle from '../Circle'

const SectionCircle = () => {

  const {width} = useSize()


  return (
    <section>
        <Circle
        color= "linear-gradient(180deg, #7EF29D 0%, #0F68A9 100%)"
        width= {(width - 450 )}
        height= {(width - 450 )}
        to= "-25%"
        bt= "initial"
        ri= "-33.33333%"
        le= "initial"
        rotate = "rotate(0deg)"
      />
      {/* 390px */}
      <Circle
        color= "linear-gradient(315.52deg, #F4797E 29.44%, rgba(242, 171, 174, 0) 90.9%)"
        width= {(205)}
        height= {(205)}
        to= {width > 768 ? "420px" : "350px" }
        bt= "initial"
        ri= "initial"
        le= {width > 768 ? "-40px" : "-20%" }
        rotate = "rotate(-152.98deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #F4797E 29.44%, rgba(242, 171, 174, 0) 90.9%)"
        width= {(56)}
        height= {(54)}
        to= {width > 768 ? "605px" : "605px" }
        bt= "initial"
        ri= "initial"
        le= {width > 768 ? "250px" : "25px" }
        rotate = "rotate(0deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #FCF3DD 29.44%, #F4C85C 90.9%)"
        width= {(114)}
        height= {(116)}
        to= {width > 768 ? "200px" : "320px" }
        bt= "initial"
        ri= "initial"
        le= {width > 768 ? "400px" : "300px" }
        rotate = "rotate(0deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #FCF3DD 29.44%, #F4C85C 90.9%)"
        width= {(164)}
        height= {(167)}
        to= {width > 768 ? "30px" : "0px" }
        bt= "initial"
        ri= {width > 768 ? "300px" : "0px" }
        le= "initial"
        rotate = "rotate(0deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #DCF1FD 29.44%, #4382FF 90.9%)"
        width= {(164)}
        height= {(167)}
        to= {width > 768 ? "570px" : "320px" }
        bt= "initial"
        ri= {width > 768 ? "700px" : "320px" }
        le= "initial"
        rotate = "rotate(180deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #DCF1FD 29.44%, #4382FF 90.9%)"
        width= {(56)}
        height= {(54)}
        to= {width > 768 ? "768px" : "768px" }
        bt= "initial"
        ri= {width > 768 ? "700px" : "700px" }
        le= "initial"
        rotate = "rotate(0deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #F4797E 29.44%, rgba(242, 171, 174, 0) 90.9%)"
        width= {(350)}
        height= {(355)}
        to= {width > 768 ? "1065px" : "1065px" }
        bt= "initial"
        ri= {width > 768 ? "700px" : "700px" }
        le= "initial"
        rotate = "rotate(152deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #DCF1FD 29.44%, #4382FF 90.9%)"
        width= {(580)}
        height= {(585)}
        to= {width > 768 ? "1365px" : "1365px" }
        bt= "initial"
        ri= {width > 768 ? "1090px" : "1090px" }
        le= "initial"
        rotate = "rotate(152deg)"
      />
      <Circle
        color= "linear-gradient(315.52deg, #FCF3DD 29.44%, #F4C85C 90.9%)"
        width= {(114)}
        height= {(120)}
        to= {width > 768 ? "1500px" : "1065px" }
        bt= "initial"
        ri= {width > 768 ? "400px" : "700px" }
        le= "initial"
        rotate = "rotate(0deg)"
      />
      
    </section>
  )
}

export default SectionCircle