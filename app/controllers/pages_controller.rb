require 'http'

class PagesController < ApplicationController
  # before_action :the_title, only: [:new_project, :create_project ]
  before_action do
    @current_user = User.find_by(id: session[:user])
  end

  def new_project
    @project = Project.new
    render :layout => "application"
  end

  def project_basic_details
    # show projects page
  end

  def create  # create project
    @project = Project.new params.require(:project).permit(:title, :description, :content)
    @project.user_id = @current_user # comes from ApplicationController

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
      session[:username] = @user.username
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
      session[:username] = user.username
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
    # Mashable API for Instructables
    response = Http.headers("X-Mashape-Key" => "CLIYw538fSmshhOhHM1vZDHfZmvTp1yuWWljsnQW0uoRDyPWAo", "Accept" => "application/json").get("https://devru-instructables.p.mashape.com/list?limit=20&offset=0&sort=recent&type=id&category=technology")
    json = JSON.parse response
    data = json.to_hash

    @items = data["items"].first(20)

    render :layout => "application"
  end

  def choose_project
    the_project_id = params[:instructables_id]
    @current_user.projects = the_project_id
  end

  def my_projects
    @projects = Project.where(:user_id => @current_user.id ).reverse
    render :layout => "application"
  end

  def project_details
    project_id = params[:project_id]

    response = Http.headers("X-Mashape-Key" => "CLIYw538fSmshhOhHM1vZDHfZmvTp1yuWWljsnQW0uoRDyPWAo", "Accept" => "application/json").get("https://devru-instructables.p.mashape.com/json-api/showInstructable?id=#{project_id}")
    json = JSON.parse response
    data = json.to_hash

    @project = data

    render :layout => "application"
  end

  def profile

  end

end
