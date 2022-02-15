//REACT DEPENDENCIES
import {useState} from 'react'

//CSS MODULES


//COMPONENTS
import Navbar from '../components/Navbar/Navbar';


const Homepage = () => {

    return (<>
   
        <Navbar>
            <Navbar.Weighted link="/">room</Navbar.Weighted>
            <Navbar.Nav link="/home">home</Navbar.Nav>
            <Navbar.Nav link="/shop">shop</Navbar.Nav>
            <Navbar.Nav link="/about">about</Navbar.Nav>
            <Navbar.Nav link="/contact">contact</Navbar.Nav>
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