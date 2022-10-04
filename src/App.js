import ReactECharts from "echarts-for-react";
import { useState } from "react";
import './app.css'

function App() {

  const random = +(Math.random() * 60).toFixed(2);

  const [temperatura, setTemperatura] = useState(0)
  const [ciudad, setCiudad] = useState("Seleccione una ciudad")


  const handleCiudad = (e)=>{
    e.preventDefault()
    setCiudad(e.target.value)
  }

  const handleTemperatura = (e)=>{
    setTemperatura(e)
  }
  let graphOptionsC = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 120,
        splitNumber: 12,
        itemStyle: {
          color: '#00bbf9'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#000'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#000'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#000',
          fontSize: 20
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 45,
          fontWeight: 'bolder',
          formatter: `${temperatura} °C`,
          color: 'auto'
        },
        data: [
          {
            value: temperatura
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 120,
        itemStyle: {
          color: '#000'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: temperatura
          }
        ]
      }
    ]
  };


  return (
    <div className="app">
      <div className="graphic">

      <ReactECharts
                    option={graphOptionsC}
                    // style={{ height: `${lineGraphHeight}px` }}
                    // onEvents={{
                      //   selectchanged: () => {
                        //     console.log("");
                        //   },
                        // }} // Añadir esto arregló el problema de encimados, y no sé porqué
                        />
                  <div className="nameCity">

                  <h4>{ciudad}</h4>
                        </div>
                  </div>

<div onClick={e=>handleCiudad(e)} className="agroupButtons">

                  <button className="btn tres"  value={"Seleccione una ciudad"}  onClick={e=>handleTemperatura(0)} >Limpiar</button>
                  <button  className="btn tres"  value={"Cuernavaca"}  onClick={e=>handleTemperatura(25)} >Cuernavaca</button>
                  <button  className="btn tres" value={"Cintalapa"}  onClick={e=>handleTemperatura(26)}>Cintalapa</button>
                  <button  className="btn tres" value={"Chihuahua"}  onClick={e=>handleTemperatura(21)}>Chihuahua</button>
                  <button  className="btn tres" value={"San Cristobal"} onClick={e=>handleTemperatura(20)}>San Cristobal</button>
                  <button  className="btn tres" value={"Tapachula"} onClick={e=>handleTemperatura(32)}>Tapachula</button>
                  <button  className="btn tres" value={"Tuxtla Gutierrez"} onClick={e=>handleTemperatura(31)}>Tuxtla Gutierrez</button>

</div>

<div className="creator">
  <h6>Hecho por: Johtzajany Hurtado Valencia</h6>
</div>
                 
    </div>
  );
}

export default App;
