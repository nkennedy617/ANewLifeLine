import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import "../style/resume.style.css";


//import './App.css';

class ResumeBuilder extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        location: '',
        school: '',
        schoolLocation: '',
        degree: '',
        major: '',
        gpa: '',
        startDateEducation: '',
        endDateEducation: '',
        school2: '',
        schoolLocation2: '',
        degree2: '',
        major2: '',
        gpa2: '',
        startDateEducation2: '',
        endDateEducation2: '',
        company: '',
        jobTitle: '',
        jobLocation: '',
        jobDescription: '',
        startDateJob: '',
        endDateJob: '',
        company2: '',
        jobTitle2: '',
        jobLocation2: '',
        jobDescription2: '',
        startDateJob2: '',
        endDateJob2: '',
        skill1: '',
        skill2: '',
        skill3: '',
        activities: '',
        summary: ''
    }

    handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    createAndDownloadPdf = () => {
        axios.post('/create-pdf', this.state)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    render() {
        return (
            <div className="dashboard-view-container">
                <div className="dashboard-container">
                    <div className="card bg">
                        <p></p>
                        <h1>Resume Builder</h1>
                        <div className="card-body">
                <h5>Profile Information</h5>
                <label className="form-control-label"
                       htmlFor="input-username">Full Name</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. John Smith" name="name" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">Email</label>
                <input type="email" className="form-control form-control-alternative"  placeholder="ex. johnsmith@email.com" name="email" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Phone Number</label>
                <input type="tel" className="form-control form-control-alternative" placeholder="ex. (555) 123-4567" name="phone" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Location</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Gainesville, FL" name="location" onChange={this.handleChange} />

                <h5>Education Information</h5>
                <label className="form-control-label"
                       htmlFor="input-username">School Name</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. University of Florida" name="school" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">School Location</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Gainesville, FL" name="schoolLocation" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Degree</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. BS" name="degree" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Major</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Computer Science" name="major" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">GPA</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. 3.6" name="gpa" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Start Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sep 2017" name="startDateEducation" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">End Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Jun 2019" name="endDateEducation" onChange={this.handleChange} />

                <h6>Add information about another school/degree</h6>

                <label className="form-control-label"
                       htmlFor="input-username">School Name</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Santa Fe College" name="school2" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">School Location</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Gainesville, FL" name="schoolLocation2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Degree</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. AA" name="degree2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Major</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Engineering" name="major2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">GPA</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. 3.0" name="gpa2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Start Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sep 2015" name="startDateEducation2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">End Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Jun 2017" name="endDateEducation2" onChange={this.handleChange} />

                <h5>Work Experience Information</h5>
                <label className="form-control-label"
                       htmlFor="input-username">Company Name</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Target" name="company" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">Job Title</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sales Associate" name="jobTitle" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Job Location</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Gainesville, FL" name="jobLocation" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Job Description</label>
                <textarea rows="4" className="form-control form-control-alternative" placeholder="Describe your responsibilities and achievements in terms of impact and results. Use examples, but keep it short" name="jobDescription" onChange={this.handleChange} />


                <label className="form-control-label"
                       htmlFor="input-username">Start Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sep 2017" name="startDateJob" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">End Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Jun 2019" name="endDateJob" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Company Name</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Target" name="company2" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">Job Title</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sales Associate" name="jobTitle2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Job Location</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Gainesville, FL" name="jobLocation2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Job Description</label>
                <textarea rows="4" className="form-control form-control-alternative" placeholder="Describe your responsibilities and achievements in terms of impact and results. Use examples, but keep it short" name="jobDescription2" onChange={this.handleChange} />



                <label className="form-control-label"
                       htmlFor="input-username">Start Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Sep 2017" name="startDateJob2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">End Date</label>
                <input type="text" className="form-control form-control-alternative" placeholder="ex. Jun 2019" name="endDateJob2" onChange={this.handleChange} />


                <h5>Skills</h5>
                <label className="form-control-label"
                       htmlFor="input-username">Skill #1</label>
                <input type="text" className="form-control form-control-alternative" placeholder="List one of your strengths" name="skill1" onChange={this.handleChange}/>

                <label className="form-control-label"
                       htmlFor="input-username">Skill #2</label>
                <input type="text" className="form-control form-control-alternative" placeholder="List one of your strengths" name="skill2" onChange={this.handleChange} />

                <label className="form-control-label"
                       htmlFor="input-username">Skill #3</label>
                <input type="text" className="form-control form-control-alternative" placeholder="List one of your strengths" name="skill3" onChange={this.handleChange} />


                <h5>Activities</h5>
                <label className="form-control-label"
                htmlFor="input-username">Activities Summary</label>
                <textarea rows="4" className="form-control form-control-alternative" placeholder="Use this section to highlight your relevant passions, activities, and how you like to give back. It’s good to include Leadership and volunteer experiences here. Or show off important extras like publications, certifications, languages and more." name="activities" onChange={this.handleChange} />

                <h5>Resume Summary</h5>
                <label className="form-control-label"
                       htmlFor="input-username">Summary</label>
                <textarea rows="4" className="form-control form-control-alternative" placeholder="Briefly state your career objective, or summarize what makes you stand out. Use language from the job description as keywords." name="summary" onChange={this.handleChange} />


                <button className="btn btn-primary" onClick={this.createAndDownloadPdf}>Download PDF</button>
            </div>
            </div>
                </div>
            </div>
        );
    }
}

export default ResumeBuilder;