const App = ({Component, pageProps}) => {

    return <div className="homepage_layout">
    
        <Component {...pageProps} />
        <style jsx global>
            {
                `
                body{
                    margin:0;
                    padding:0;
                } 
                `
            }
        </style>
    </div>
}

export default App