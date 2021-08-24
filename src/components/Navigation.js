import react from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav class="navi">
            <ul>
                <li><Link to="time">Time</Link></li>
                <li><Link to="online-profile">OnlineProfile</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="join">Join</Link></li>
                <li><Link to="school">School</Link></li>
                <li><Link to="course-registar">CourseRegistar</Link></li>
            </ul>
    </nav>
)

export default Navigation