import {useState} from 'react'
import Navbar from '../components/Navbar/Navbar';

const Homepage = () => {
    const [state, setState] = useState(false);

    return (<>
        <Navbar>
            <Navbar.Nav>room</Navbar.Nav>
            <Navbar.Nav>home</Navbar.Nav>
            <Navbar.Nav>shop</Navbar.Nav>
            <Navbar.Nav>about</Navbar.Nav>
            <Navbar.Nav>contact</Navbar.Nav>

        </Navbar>
    </>)
}

// export const getStaticProps = async () => {
//     const userData = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
//     console.log(await userData.json())
    
//     return {
//         props: {
//             greeting: "hello"
//         }
//     }
// }

export default Homepage