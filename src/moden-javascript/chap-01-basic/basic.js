import React from 'react'

var man = {} //es5
//전역 

const Basic = () => {
    const letSample = () =>{
        let tom = 'Tom' //es6 에서 variable
        const james = 'James' // es6 에서 constant
    }
    const dynamicType = ()=>{
        let userId = 12;
        console.log('USER ID is ${userId}')
        userId = 'kim'
        console.log('USER ID is ${userId}')
    }
    
    const jsonSample =()=>{
        const car= {
            wheel: 4,
            color: "red",
            driver: () => {console.log("wroom wroom")}      
        }
        console.log(Object.keys(car),[0])
        console.log(typeof Object.keys(car),[0])
        car.driver();

    }
    return (<>
    <button onClick={dynamicType}>DynamicType</button><br/>
    <button onClick={dynamicType}>다이나믹 타입 테스트</button>
    </>)


const j = {}

}

export default Basic