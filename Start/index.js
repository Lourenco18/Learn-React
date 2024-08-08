
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
