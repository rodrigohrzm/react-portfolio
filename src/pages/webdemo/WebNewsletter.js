import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function WebNewsletter() {
    const [ShowForm, setShowForm] = useState (true);
    const [ name , setName ] = useState ("");
    const [ email , setEmail ] = useState ("");
    const [ subject , setSubject ] = useState ("");
    const [ message , setMessage ] = useState ("");

    const form = useRef();
    const handleSubmit = (e) => {
	    e.preventDefault();
	    let formData = [name, email, subject, message];
	    emailjs.sendForm('service_tihk3c6', 'template_ax1fnkl', form.current, 'CXTj3yKjPUKyka9vT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
	    setShowForm(false);
	    return null
	}

    return (
      <>
		<h3>How can we help you?</h3>
		<p>If you have any other inquiry please let us know here.</p>
		<div className={ShowForm === true ? "hiddenAlert" : "showAlert"}>
  			Message sent! I'll get back to you shortly.
		</div>
		<form ref={form} onSubmit={handleSubmit} className={ShowForm === true ? "" : "hiddenForm"}>
			    <div className="col-6 col-12-xsmall"><input required type="text" name="name" id="name" placeholder="name" minLength="3" value={name} onChange={(e => setName(e.target.value))}/></div>
			    <div className="col-6 col-12-xsmall"><input required type="email" name="email" id="email" placeholder="email" value={email} onChange={(e => setEmail(e.target.value))}/></div>
			    <div className="col-12"><input type="text" name="subject" id="subject" placeholder="subject" value={subject} onChange={(e => setSubject(e.target.value))}/></div>
			    <div className="col-12"><textarea name="message" id="message" placeholder="your message" rows="6" value={message} onChange={(e => setMessage(e.target.value))}></textarea></div>
			    <div className="col-12">
                <input type="submit" value="Send Message" />
			    </div>
		</form>
      </>
    )};

  export { WebNewsletter };