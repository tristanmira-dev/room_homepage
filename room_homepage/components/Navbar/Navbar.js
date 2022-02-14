const Navbar = (props) => {

    return (
        <header>{props.children}</header>
    )
}

const Nav = (props) => {
    return (<nav>{props.children}</nav>)
}

Navbar.Nav = Nav

export default Navbar