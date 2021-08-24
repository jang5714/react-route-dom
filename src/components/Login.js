import React from 'react'

const Login = () =>(
<div>
<form action="login.php" method="POST">
    <ui>
        <li>
            <label for="id"/>아이디
            <input type="text" id="id"/>
        </li>
        <li>
            <label for="pw"/>패스워드
            <input type="password" id="pw"/>
        </li>
        <li>
            <input type="submit" title="로그인" value="로그인"/>
        </li>
    </ui>
</form>
</div>)
export default Login