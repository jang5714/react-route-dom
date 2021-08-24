import React from 'react'

const School = () =>(
<div>
<h1>여름방학 특강 신청</h1>
<form>
    <fieldset>
        <legend>수강 신청인</legend>
        <ul>
            <li>
                <label class="reg" for="id">학번</label>
                <input type="text" id="id" autoFocus/>
            </li>
            <li>
                <label class="reg" for="name">이름</label>
                <input type="text" id="name" autoFocus/>
            </li>
            <li>
                <label for="class" class="reg">학과</label>
                <select id="class">
                    <option label="공과대학">
                        <option value="archi"/>건축공학과
                        <option value="mechanic"/>기계공학과
                        <option value="indust"/>산업공학과
                        <option value="elec"/>전기전자공학과
                        <option value="computer" selected/>컴퓨터 공학과
                        <option value="chemical"/>화학공학과
                    </option>
                    <option label="인문대학">
                        <option value="history"/>사학과
                        <option value="lang"/>어문학과
                        <option value="philc"/>철학과
                    </option>
                </select>
            </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>수강 과목을 선택하세요</legend>
        <ul>
            <li>
                <span class="leg"/>관심분야
                <label for="interset"/>
                <input type="text" id="interest" list="choices"/>
                <datalist id="choices">
                    <option value="grammer" label="문법"/>
                    <option value="voca" label="어휘"/>
                    <option value="speaking" label="말하기"/>
                    <option value="listening" label="리스닝"/>
                    <option value="news" label="뉴스청취"/>
                </datalist>
            </li>
        </ul>
    </fieldset>
</form>
</div>)

export default School