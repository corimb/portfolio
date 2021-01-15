import React from 'react';
import photo from '../images/corina.jpg'
import '../App.css';

const Bio = () => {
    return(
    <>
    <section>
	    <article>
			<img src={photo} alt="corina" className="photo"></img> 
	    </article>
        <article>
            <p>Esto es bio</p>
        </article>
    </section>
    <section className="history">
        <article className="bio-icons">
            <p>Icons</p>
        </article>
        <article className="bio-skills">
            <p>Skills</p>
        </article>
    </section>
    <section>
        <button>
            <a href="../download/cv-corina-borcoci.pdf" download="cv_corina_borcoci.pdf">Download CV</a>
        </button>
    </section>
    </>
    )
    
    
}

export default Bio;