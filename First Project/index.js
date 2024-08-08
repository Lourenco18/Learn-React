/*function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}*/

//imperative
/*const h1  = document.createElement('h1')
h1.textContent = "I'm learning React!"
h1.className = "header"
document.getElementById("root").append(h1)*/

//declarative
//ReactDOM.render(<h1 className="header">I'm learning React!</h1>, document.getElementById("root"))

//JSX
        //ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))

        /*const h1 = document.createElement("h1")
        h1.textContent = "Hello world"
        h1.className = "header"
        console.log(h1)*/

        // <h1 class="header">

        /*const element = <h1 className="header">This is JSX</h1>
        console.log(element)*/

        /*
        {
            type: "h1", 
            key: null, 
            ref: null, 
            props: {className: "header", children: "This is JSX"}, 
            _owner: null, 
            _store: {}
        }
        */

        // JSX
        //ReactDOM.render(element, document.getElementById("root")) 

       
            /*const page = (
                <div>
                    <h1 className="header">This is JSX</h1>
                    <p>This is a paragraph</p>
                </div>
            )
            ReactDOM.render(
                page
                ,
                document.getElementById("root")
            )*/


            /* 
        Challenge: 

        Create a navbar in JSX:
            - Use the semantic `nav` element as the parent wrapper
            - Have an h1 element with the brand name of your "website"
            - Insert an unordered list for the other nav elements
                - Inside the `ul`, have three `li`s for "Pricing",
                "About", and "Contact"
            - Don't worry about styling yet - it'll just be plain-looking HTML for now
        */
           
            
            


            /*Challenge: find out what happens if we try to append JSX
            to our div#root using .append() instead of ReactDOM

            1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
            2. Select the div with the ID of "root" and use `.append()` to append
            your JSX
            3. See if you can guess what will show up in the browser before running
            the code
            4. See if you can explain what actually shows up in the browser
            */
            // Primeiro elemento
            const Navbar = (
                <nav>
                <h1>Bob's Bistro</h1>
                <ul>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            );
            
            // Segundo elemento
            const Title = (
                <h1>Title</h1>
            );
            
            // Elemento
            const Subtitle = (
                <h2>Subtitle</h2>
            );
            
            // Elemento
            const MainText = (
                <p>Main Text</p>
            );
            
            // Todos os elementos
            function Page() {
                return (
                <div>
                    {Navbar}
                    {Title}
                    {Subtitle}
                    {MainText}
                </div>
                );
            }
            
            ReactDOM.render(
                <Page />,
                document.getElementById('root')
            );
