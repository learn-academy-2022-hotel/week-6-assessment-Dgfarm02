# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: hmm I seem to be blanking on this, I know the foreign key is going to be the ID for the 2nd database we create, but I can't remember what it would be called. I think it would be on the Student model. 

Researched answer: You can fix this mistake by adding the foreign key on the Student model. The name of the foreign key should be "cohort_id" and it should reference the "id" column on the Cohort model. You can do this by running the following command in your Rails console:
add_column :students, :cohort_id, :integer
This will add a new column called "cohort_id" to the "students" table and set its data type to "integer".
Then you need to add the following to your student model:
belongs_to :cohort
This tells Rails that the Student model belongs to the Cohort model and that it has a foregin key of "cohort_id"

2. Which RESTful routes must always be passed params? Why?

Your answer:  I think it's updating and creating? those are the ones you don't want users to have more access than they should so you limit what access they have? I'm  not sure tbh

Researched answer: The RESTful routes that must always be passed parameters are the routes that perform "show," "update," and "destroy" actions. This is because these actions require a specific resource to be identified, and the parameters are used to identify which resource to show, update, or destroy.

3. Name three rails generator commands. What is created by each?

Your answer: rails g model, which creates a model. rails g controller which creates a controller. and raild g resource which i still don't fully understand, but it creates a whole bunch of stuff for us like routes and models

Researched answer:
rails generate model: This command generates a new model file and corresponding database migration file. The migration file is used to create the corresponding table in the database.

rails generate controller: This command generates a new controller file and corresponding view files. The controller file contains the logic for handling requests and the view files contain the HTML templates that are rendered in response to those requests.

rails generate scaffold: This command generates a new model, controller, view files and corresponding database migration file. This command creates a full set of CRUD (Create, Read, Update, and Delete) functionality for a resource, including routes, views and controller actions.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Show Controller Method
this would display all of the info in the students database

action: "POST" location: /students
Create Controller Method
this would be used to create a new entry in the students database

action: "GET" location: /students/new
New Controller Method 
this will generate a form that can be filled out and submitted to add an entry into the students database

action: "GET" location: /students/2
Show Controller Method
this will diplay a single entry from the students database

action: "GET" location: /students/2/edit
Edit Controller Method
this will generate a form that can be filled out and submitted to edit the entry you are in

action: "PATCH" location: /students/2
Update Controller Method 
this will submit the changes that were made in the Edit Method

action: "DELETE" location: /students/2
Destroy Controller Method
This will delete the entry you are in

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I want to be able to create new tasks so that I can add items to my to-do list.
As a user, I want to be able to view all my tasks in a list format so that I can easily see what I need to do.
As a user, I want to be able to mark tasks as complete so that I can keep track of what I've finished.
As a user, I want to be able to edit existing tasks so that I can make changes if needed.
As a user, I want to be able to delete tasks that are no longer necessary so that my list stays organized.
As a user, I want to be able to set a due date for each task so that I know when it's due.
As a user, I want to be able to categorize my tasks into different groups (e.g. personal, work, shopping) so that I can easily find the tasks I need.
As a user, I want to be able to set a priority level for each task so that I can prioritize what needs to be done first.
As a user, I want to be able to receive reminders for tasks that are due soon so that I don't forget to do them.
As a user, I want to be able to view my completed tasks in a separate list so that I can see what I've accomplished.