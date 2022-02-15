import style from "../../assets/css/navbar/navbar.module.css"

const Navbar = (props) => {
    return (
        <header className={style.navbar_container}>{props.children}</header>
    )
}

const Nav = (props) => {
    return (<a href={props.link} className={style.nav}>{props.children}</a>)
}

const Weighted = (props) => {
    return (<a href={props.link} className={style.weigthed_nav}>{props.children}</a>)
}

Navbar.Nav = Nav
Navbar.Weighted = Weighted

export default Navbar