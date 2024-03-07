InclusiveDine 
=============

[InclusiveDine](https://inclusive-dine-30e4e63a5918.herokuapp.com/)


Developed as a user-centric CRUD application using Express and Mongoose as the backend, InclusiceDine was created to allow authenicated users to add reviews of venues, chiely resturants. The review theme centes around how accesiable a venue is to people that require mobility assistance. Such as those with wheelchairs. This RESTful Api is design and styled to work across destops, tablets and mobile devices.

Visitors to the site are met with a simple landing page. 
This contains some basic information about the site as well as what might be frequently asked questions.
The two navigational options are to log in or view venues and reviews. 

![Imgur](https://i.imgur.com/VE9G4Ka.png)

After clicking Log in or Join the team the visitor is directed to the well known google OAuth page to sign in with a Google account.

![Imgur](https://i.imgur.com/efkVA8g.png)

Completed athenication with Google, displays their name and Google avatar. It also provides greater scope of navigation: access to their user dashboard where reviews created with their account are displayed, and the ability to Add a venue for other users to review as well.

![Imgur](https://i.imgur.com/8SvR58J.png)

This user has reviews and may scroll down through them with the option to Edit or Delete an individual review.

![Imgur](https://i.imgur.com/HY3ub66.png)

Navigating to Revenues and Reviews displays a list of venues that have been added.

![Imgur](https://i.imgur.com/vECcily.png)

Clicking on the reviews button takes you to the reviews page for that review. 

![Imgur](https://i.imgur.com/owVSqky.png)

**Technologies Used**: 
* [OAuth](https://oauth.net/2/) - A standard protocol of authenziaton in web development.
* [Model View Controller architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) - Software design pattern.
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) - High level run time language.
* [Node](https://en.wikipedia.org/wiki/Node.js) - Run-time enviroment.
* [Express.js](https://en.wikipedia.org/wiki/Express.js ) - Back-end web aplication for RESTFul APIs.
* [HTML](https://en.wikipedia.org/wiki/HTML) - Markup language.
* [CSS](https://en.wikipedia.org/wiki/CSS) - Language used for expressing presentation and structure of documents.
* [MongoDb](https://en.wikipedia.org/wiki/MongoDB) - Document orientated database.
* [Mongoose](https://en.wikipedia.org/wiki/Mongoose_(web_server)) - Networking library.
* [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) - Frontend CSS framework.

**Key learnings**
* Getting to know error codes and the most likely cause.
* Best to not embed inside a model data, that you wish to CRUD upon.
* Console.table is your best friend when using arrays.
* Writting loads of If statements can help to solve problems.
* If statements in some instances are the perfect pseudocode to map out the logic for a loop.
