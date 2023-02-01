# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPostController is inheriting from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable that will display all of the BlogPosts in the database
    @posts = BlogPost.all
  end

  # ---3) show is a controller method that will display a single item from a database by accessing the params for the primary key (id)
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) new is a controller method that will create a form that can be filled out to add data to the database
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) @post is an instance variable that it is submitting the new info added to the form above, but it is using the strong param blog_post_params to limit what info can be updated by the user. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) this instance variable will display a single item from the database based on the primary key (id) that is going to be edited 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this is going to submit the changes to whatever blog post we are in, as long as those changes are allowed by the strong params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) this will take us back to our landing page after an element or whatever in the database has been successfully deleted
      redirect_to blog_posts_path
    end
  end

  # ---9) these are the strong params, everything below this line is meant for the developer not the user. they are separated out to restrict access
  private
  def blog_post_params
    # ---10) this is the strong param that is limiting what information can be manipulated by the user
    params.require(:blog_post).permit(:title, :content)
  end
end
