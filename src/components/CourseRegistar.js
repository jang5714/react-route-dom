import React from 'react'

const CourseRegistar = () =>(
    <table border="1">
        <caption>제주특별자치도 학교현황(2015.4.1 기준)</caption>
        <thead>
            <tr>
                <th>구분</th>
                <th>학교수</th>
                <th>헉급수</th>
                <th>학생수</th>
                <th>교원수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>유치원</th>
                <th>117</th>
                <th>252</th>
                <th>5,547</th>
                <th>474</th>
            </tr>
            <tr>
                <th>초등학교</th>
                <th>111</th>
                <th>1,720</th>
                <th>37,686</th>
                <th>2,632</th>
            </tr>
            <tr>
                <th>중학교</th>
                <th>44</th>
                <th>699</th>
                <th>21,274</th>
                <th>1,412</th>
            </tr>
            <tr>
                <th>고등학교</th>
                <th>29</th>
                <th>676</th>
                <th>22,010</th>
                <th>1,413</th>
            </tr>
            <tr>
                <th>특수학교</th>
                <th>3</th>
                <th>90</th>
                <th>428</th>
                <th>160</th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>합계</th>
                <th>300</th>
                <th>3,437</th>
                <th>86,954</th>
                <th>6,111</th>
            </tr>
        </tfoot>
    </table>
)

export default CourseRegistar