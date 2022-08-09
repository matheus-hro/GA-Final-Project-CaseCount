import { useState, useEffect } from "react";


export default function BlogPage (props) {
    const [blogPosts, setBlogPosts] = useState([]);

    async function getAllBlogPosts(){
        let fetchResponse = await fetch("/api/blog", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        let blogPostArray = await fetchResponse.json(); // <-- decode fetch response
        setBlogPosts(blogPostArray);   // <-- log server response
    }

    async function submitContactForm(e) {
        e.preventDefault();
        let newBlogPost = {
          title: e.target.form.title.value,
          body: e.target.form.body.value
        };
        try {
            let fetchResponse = await fetch("/api/blog", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(newBlogPost) // <-- send this object to server
            })
            let serverResponse = await fetchResponse.json() // <-- decode fetch response
            console.log("Success:", serverResponse)   // <-- log server response
  
            if (fetchResponse.ok){
                getAllBlogPosts();
            }
          } catch (err) {
            console.error("Error:", err) // <-- log if error 
        }
    };

    useEffect(getAllBlogPosts, [])

    return (
        <section>
        <h1>Blog posts</h1>
        <hr />
        <h2>New entry</h2>
        <form name="new-blog-post">
            <label for="title">Title</label>
            <input name="title" required/>
            <br/>
            <label for="body" required>Post</label>
            <textarea name="body"></textarea>
            <br/> 
            
            <input type="submit" value="submit" onClick={submitContactForm}/>
        </form>
        <br/>
        <h2>Past posts</h2>
        {blogPosts.map(e => (
          <div key={e.id}>
            <h3>{e.title}</h3>
            <div>{e.body}</div>
            <hr/>
          </div>
          
        ))}
    </section>
    )
    
}