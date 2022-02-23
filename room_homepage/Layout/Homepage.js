import style from "../assets/css/layout/homepage.module.css"
import Navbar from "../components/Navbar/Navbar"

const Homepage = (props) => {
    return (
      <div class={style.homepage_container}>
        <div class={style.upper_content}>

          <div class={style.item_1}>
            <Navbar>
              <Navbar.Weighted link="/">room</Navbar.Weighted>
              <Navbar.Nav link="/home">home</Navbar.Nav>
              <Navbar.Nav link="/shop">shop</Navbar.Nav>
              <Navbar.Nav link="/about">about</Navbar.Nav>
              <Navbar.Nav link="/contact">contact</Navbar.Nav>
            </Navbar>
          </div>

          <div>
            <div class={style.body}>
              <div class={style.title}>
                Discover innovative ways to decorate
              </div>
              <div class={style.content}>We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and what
              you love
              </div>
              <div class={style.link}>
                SHOP NOW <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="gray" fill-rule="nonzero"/></svg>
              </div>
            </div>

            <div class={style.footer}>
              
            </div>
          </div>

        </div>
      </div>
    )
}

const UpperContent = (props) => {
  return (<>
    <div className={style.homepage_container}>
      
      <div className={style.upper_content}>
        {props.children}        
      </div>
      
    </div> 
    
    </>
  )
}

const LowerContent = (props) => {
  return (<>

  </>)
}


Homepage.UpperContent = UpperContent
Homepage.LowerContent = LowerContent

export default Homepage