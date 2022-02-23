//REACT DEPENDENCIES
import {useState} from 'react'

//CSS MODULES
import homepageItems from '../assets/css/layout/homepage.module.css'


//COMPONENTS
import Navbar from '../components/Navbar/Navbar';
import Homepage from '../Layout/Homepage';


const Home = () => {

    return (<>
        <Homepage/>
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

export default Home