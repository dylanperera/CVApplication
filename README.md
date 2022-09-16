# CV Builder Application

**Motivation**
When I was getting to apply for internships last year, the most difficult process for me was creating the perfect CV that suits me. After numerous iterations I found one that I found to be the one for me. Althoug the structure of CVs should be dependent on the nature of the applicants' career choices, the CV should still be simple, clear and readable.

I have created an implementation of a CV creator based on a template that I use for my own CV. This template has clear headings, and simple yet readable sections.

**Features**
The app features a Form, and a sticky template element. The template will automatically fill up whenever information is entered into the form. The form features a few Sub Sections:

General Information (Name, Last name, Title, Address, Email, Phone Number, and Linkedin)
Description
Work experience
Education experience
This application is created with React, and the main learning point of the project is the use of Class Components and handling inputs and rendering lists in React.


Another one of the features of the project is to allow the user to download the CV-template in PDF format. The following packages are used to make that possible:
html2canvas documentation
jsPDF documentation

Generate Example Feature:
Will fill the template with an example for the user, on the click of a button

Reset Example Feature:
Clears the sticky template, which in turn will clear the CV template, on the click of a button

**Future implementations**
I would implement these few changes to improve the application:

1. Further Form Validation
2. Adding API calls to city input and school input, for user to select their cities / schools
3. Add a cover letter section that will automatically fill out when the user types the information in the template.
4. Have different variations of templates for the CV
5. Allow the user more options (i.e., to move different components around, change font-size, spacing, color, etc.,)
