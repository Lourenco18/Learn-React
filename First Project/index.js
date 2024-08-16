


/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  const codepart1= (
    <div>
    <h1>Code of this page</h1>
        <div className="code">
          <div className="code-window">
            <div className="title-bar">
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className="code-container">
              <div className="code">
               
                <span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">"react"</span><br />
                <span className="keyword">import</span> ReactDOM <span className="keyword">from</span> <span className="string">"react-dom"</span><br /><br />
    
                <span className="keyword">const</span> page = (<br />
                &nbsp&nbsp;&nbsp;&lt;div&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="./react-logo.png" width="40px" /&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Fun facts about React&lt;/h1&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Was first released in 2013&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Was originally created by Jordan Walke&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Has well over 100K stars on GitHub&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Is maintained by Facebook&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Powers thousands of enterprise apps, including mobile apps&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                );<br /><br />
    
                ReactDOM.render(page, document.getElementById(<span className="string">"root"</span>));<br /><br />
    
              </div>
            </div>
          </div>
        </div>
        </div>
  )
  

  const ex1 = (
    <div>
      <h1>Scrimba Course</h1>
      <div className="main-conteiner">
        <img src="./react-logo.png" width="40px" alt="React logo" />
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
       
      { codepart1}
    </div>
     
  );
  /**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

    
const header= (
 <div>
    <nav>
      <img src="./react-logo.png" width="40px" alt="React logo" />
    </nav>
    <h1>Reasons I'm excited to learn React</h1>
 </div>
);

const footer= (
    <div>
        <footer>
            <small>© 20xx Lourenço development. All rights reserved.</small>
        </footer>
      
    </div>
);
const MainContent=(
  <ol>
      <li>It's a popular library, so I'll be 
      able to fit in with the cool kids!</li>
      <li>I'm more likely to get a job as a developer
      if I know React</li>
</ol>
);

const ex2= (
  <div>

    <div className="main-conteiner">
        {header}
        {MainContent}
        {footer}
    </div>
     
   
  </div>
   
);


/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/
import Header from "./Header";

 
 const ex3= (
   <div>
 
     <div className="main-conteiner">
         {Header}
         <h1>Reasons I'm excited to learn React</h1>
  
        {MainContent}
     
         {footer}
     </div>
      
    
   </div>
    
 );
 
 //All Page render

function  AllPage() {
  return ( 
    <div>
      {ex1}
      {ex2}
      {ex3}
    </div>
  )
}

  
  ReactDOM.render(<AllPage/>, document.getElementById('root'));