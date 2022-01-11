# W05D05 - Mid-term Project Kickoff

### Pick a Project

- Buy/Sell Listing Website


### User Stories
- A _user story_ describes how users will interact with your application
- They have the form: As a ______, I want to ______, because ______.\

# Users
1) - As a user, I want to see the items in a main feed(homepage), because users want to see all featured items in one view.
- As a user, I want to see the price of the product, because users want to find the best price

- As a user, I want to have my ID and password, because users should login to see their favourite item list
2) - As a user, I want to filter the item by the price, because users want to see the lowest price?

3) - As a user, I want to be able to save my favourite items, because users want to review them later.

4) - AS a user, I want to communicate with the seller, becasue users want to negotiate the price.

5) - As a user, I want to see the favourite item page, because users want to organized data
(seperate page) ** optional

6) - AS a user, I want to see the products details, because users want to see the details
(seperate page) ** optional


# Admins(user)
1) - As an admin, I want to login as an admin because I want to fix the item info

2) - As an admin, I want to post the items because admins want items to seen by the users(main)
3) - As an admin, I want to remove the items because the items are sold

4) - As an admin, I want to communicate users with chat app in the website because admins want to communicate with users
   - As an admin, I want to communicate users with users email beacuse admins want to send an email to user
   - As an admin, I want to communicate users with users phone numbers(text) admins want to send a text
   - As an admin, I don't want users to access other user info, because of privacy reasons

6) - As an admin, I want to post the items because admins want items to seen by the users(details)
- As an admin, I shouldn't be able to let users post, edit, and delete the items because users don't own those posts(details)

- eg. As a _user_, I want to _be able to save posts_, because _I want to review them later_.
- User stories can also be negated: As a _____, I shouldn't be able to ______, because _____.
- eg. As a _user_, I shouldn't be able to _edit other users posts_, because _I don't own those posts_.

### User Scenarios
# ex
- A _user scenario_ is a syntactic alternative to user stories
- They have the form: Given _____, when ______, then ______.
- eg. Given _that I am logged in_, when _I click favourite on a post_, then _it is added to my favourites_.
- You can also chain on an _and_ to user stories/scenarios
- eg. Given _that I am logged in_, when _I click favourite on a post_, then _it is added to my favourites_ **and** _the save icon will change to indicate success_.

# Our Site Scenarios
* guests
Given _that I am logged in or not_, when _I click on a image_, then _it is take to the product page_.(**and** _the details are provided_.)
Given _that I am logged in or not_, when _I go to the hompage_, then _it will show me the featured items_.

* users
Given _that I am logged in_, when _I click on a filter button_, then _it is filter the product by price_ **and** _display them by price_.
Given _that I am logged in_, when _I click on a favourite button_, then _it is added to my favourites_ **and** _the save icon will change to indicate success_.
Given _that I am logged in_, when _I click on a chat app_, then _it is possible to send a message to the admin that is listing the item that I'm interested in_ 
Given _that I am logged in_, when _I click on a favourite button on the top nav bar_, then _favourites page will open_.
Given _that I am logged in_, when _I hover on a image_, then _it will make the image bigger_.

**stretch**
Given _that I am logged in_, when _I click on a image_, then _it is take to the product_ **and** _the details are provided_.


* admins
Given _that I am logged in as an admin_, when _I click on a post button_, then _the product will post on homepage_.
Given _that I am logged in as an admin_, when _I click on a delete button_, then _the product will deleted on homepage_.
Given _that I am logged in as an admin_, when _product count = 0_, then _the product will be displayed as SOLD OUT on homepage_.
Given _that I am logged in as an admin_, when _I click on a chat app_, then _it is possible check the messages from the users_.
Given _that I am logged in as an admin_, when _a user registrates_, then _the user info will be saved in our db_ **and** _admins can check the user info_.

**stretch**
Given _that I am logged in as an admin_, when _I click on a post button_, then _the product will post on homepage_**and**_the product will post on product detail page_.

### ERD
- The user stories provide you with nouns (eg. user, posts, favourites)
- Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

### Routes
- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
- Remember RESTful conventions (they make it much easier)

B /items
R /users/:id/fav
E /products/edit
A /products/:id(admin)
D /products/:id(admin)

### MVP vs MVD
- There is a concept in development of an MVP, the Minimum Viable Product
- An MVP has just enough features to be useful to a user
- This concept helps streamline the development process and help keep the team on target
- For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
- **If you aren't going to demo it, don't build it**

# noorExpress MVD
- Title of the page(nav bar)
- user login button(nav bar) - user/admin
- favourite button(nav bar)
- message button (will discuss later)
- filter by (price high/low,items,alphabetically)
- featured items images
- featured items names, prices
- featured items can be hovered over and magnified
- featured items favourite button(indicator needed)

### Wireframes
- Draw out the structure of your web pages
- This will make it much easier to build out these pages later
- This is also a great opportunity to get input from all of the team members
- Design matters... however you are a developer, not a designer
- Get inspiration from websites you visit

> Added wireframe file to planning directory

### User Login
- Don't do it
- Seriously, don't do it
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  // cookie-session middleware
  req.session.user_id = req.params.id;

  // cookie-parser middleware
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
- We have made all the tech choices for you
- Back End: Node and Express
- Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton
- Use the provided `node-skeleton` as a template for your project
- This will get you up and running quickly

### SPA vs Multi-page App
- These concepts are not mutually exclusive
- You can choose one or the other or both

### Git
- Use Git best practices (ask a mentor for clarification if you need it)
- Use branches

### DO NOT CODE ON MASTER
- I repeat, do not code on master
- master / development / header
                       -- 

> 1. Working on a branch
> 2. push the branch to github(he pushed updated code into his my-feature branch)
> 3. feature is done

// cloud
> 4. open a pull request(PR) (he made a pull req)
> 5. review with team
> 6. the PR gets merged into master (his pull req merged into master) - deleted his branch

> 7. checkout master locally (his master would not have his branch's code because he write the code in his branch)
> 8. git pull origin master (he downloaded updated master into local machine)

// locally
> 4. checkout master
> 5. git merge my-branch
> 6. git push origin master
// everone else
> 7. checkout master locally
> 8. git pull origin master


### Splitting up the Work
- Horizontally - whole team working on front-end or back-end at the same time
- Vertically - divide the work between front-end and back-end

- Pair Programming - working together on the same tasks

### Communication
- Make sure to communicate with your team members
- Use Slack, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page

### Github Projects
- Github has a built-in project board (similar to a kanban board)

### Deployment
- Decide if you want/need to deploy your application to the cloud
- Ask a mentor for assistance/advice if your team decides to deploy
