require 'http'

class PagesController < ApplicationController
  # before_action :the_title, only: [:new_project, :create_project ]

  def new_project
    @project = Project.new
    render :layout => "pages"
  end

  def project_basic_details
    # show projects page
  end

  def create  # create project
    @project = Project.new params.require(:project).permit(:title, :description, :content)

    if @project.save
      redirect_to root_path
    else
      flash.now[:alert] = "Please complete all steps"
      render :new_project
    end
  end

  def blank_page2
  end

  def signup
    @user = User.new
    render :layout => "pages"
  end

  def signup_post
    @user = User.new params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    if @user.save
      session[:user] = @user.id
      redirect_to root_path, success: "Cool! You're signed up #{@user.first_name}!"
    else
      render :educator_signup, alert: "Something wrong."
    end
  end

  def educator_profile
    # @educator = Educator.find_by id: session[:id]
  end

  def signin

  end

  def signin_post
    email = params[:session][:email]
    password = params[:session][:password]

    user = User.find_by(email: email)

    if (user) && (user.authenticate password)
      session[:user] = user.id
      redirect_to root_path, success: "You're signed in #{user.full_name}!"
    else
      render :signin, notice: "Please try again."
    end
  end

  def signout
    session.delete :user
    redirect_to root_path
  end

  def browse_projects

  end

end
