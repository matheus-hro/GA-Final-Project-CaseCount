import { useState } from "react";

export default function ContactPage (props) {
    const [successMessage, setSuccessMessage] = useState("")
    
    async function submitContactForm(e) {
        e.preventDefault();
        let newContact = {
          sender: e.target.form.sender.value,
          email: e.target.form.email.value,
          phoneN: e.target.form.phoneN.value,
          message: e.target.form.message.value,
        };
        try {
            let fetchResponse = await fetch("/api/contact", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(newContact) // <-- send this object to server
              }) 
            let serverResponse = await fetchResponse.json() // <-- decode fetch response
            console.log("Success:", serverResponse)   // <-- log server response
            setSuccessMessage("Thanks! I'll get back to you as soon as possible.")

      
          } catch (err) {
            console.error("Error:", err) // <-- log if error 
          }
    };

    return (            
    <section>
        <h1>Contact me!</h1>
        <hr />
        <form name="contact-form">
            <label for="sender">Your name</label>
            <input name="sender" required/>
            <br/>

            <label for="email">Email</label>
            <input name="email" type="email" required/>
            <br/>

            <label for="phoneN">Phone number</label>
            <input name="phoneN" type="tel" />
            <br/>

            <label for="message" required>Your message</label>
            <textarea name="message"></textarea>
            <br/> 
            
            <input type="submit" value="submit" onClick={submitContactForm}/>
        </form>
        <div>{successMessage}</div>
    </section>
    )
}