import ReactDom from 'react-dom'

const App = ({Component, pageProps}) => {

    return <div>
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