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

  const image = (
    <div>
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
              &nbsp;&nbsp;&lt;div&gt;<br />
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
  );
  
  ReactDOM.render(image, document.getElementById('root'));