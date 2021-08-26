import react from 'react'
import styled from 'styled-components'

const Aside = () => (
    <aside>
            <h3>알립니다</h3>
            <p>맛은 새콤달콤한 편이지만[14] 강렬하지 않고 밍밍하다. 과일사탕 수준의 새콤달콤을 기대하고 있었다면, 입에 넣는순간 어째서 밍밍하다는 것인지 알 수 있다.</p>
            <p>맛은 새콤달콤한 편이지만[14] 강렬하지 않고 밍밍하다. 과일사탕 수준의 새콤달콤을 기대하고 있었다면, 입에 넣는순간 어째서 밍밍하다는 것인지 알 수 있다.</p>
            <img src="images1/2.jpg" alt=""/>
            <img src="images1/1.jpg" alt=""/>
            <img src="images1/4.jpg" alt=""/>
    </aside>
)

export default Aside

const aside = styled.div`
    width= 100px;
    position= left;
`

