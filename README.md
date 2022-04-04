# social-network-api-mod18

<br/>

## **Link** to GitHub repo: https://github.com/alinz07/social-network-api-mod18

## **Link** to walkthrough video:

<br/>

## **Motivation**

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<br/>

## **Table of Contents**

[How and Why?](#what-problem-does-this-solve-and-how-was-a-solution-accomplished) <br/>
[Things I learned](#things-i-learned) <br/>
[What makes this project stand out?](#what-makes-this-project-stand-out) <br/>
[Challenge Criteria](#challenge-criteria)<br/>
[Screenshot of Web Application](#screenshot-of-web-application)<br/>
[Credits](#credits)<br/>

<br/>

## **What Problem does this solve and how was a solution accomplished?**

MongoDB is a popular choice for social networks because of it's speed with large amounts of data and flexible data structures. Data is the foundation of social networks that use MongoDB, so it's important to understand how to build and structure the API.

<br/>

## **Things I learned**

-   The model.populate method doesn't work when you use model.findOne using info from the body, I needed to use params. Not sure if it's a synchronous issue or something inherent to mongoose. I was confused about the endpoints for my routes when accessing document Ids. For example with an endpoint /api/users/:userId and then using params to findOne user vs /api/users and passing a body to findOne user with a username or id in the body.
    <br/>

## **What makes this project stand out?**

The simplicity and readability of mongoose and it's associated code. With minimal effort I was able to get the server up and running and the routes were very simple to create.

<br/>

## **Challenge Criteria**

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

-   GIVEN a social network API<br/>

-   WHEN I enter the command to invoke the application<br/>
    THEN my server is started and the Mongoose models are synced to the MongoDB database

-   WHEN I open API GET routes in Insomnia for users and thoughts<br/>
    THEN the data for each of these routes is displayed in a formatted JSON

-   WHEN I test API POST, PUT, and DELETE routes in Insomnia<br/>
    THEN I am able to successfully create, update, and delete users and thoughts in my database

-   WHEN I test API POST and DELETE routes in Insomnia<br/>
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

    <br/>

## **Screenshot of Web Application**

This project has no front end. Please see the walkthrough video linked above.

<br/>

### **Credits**
