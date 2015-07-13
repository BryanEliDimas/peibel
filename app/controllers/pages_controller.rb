class PagesController < ApplicationController
  # before_action :the_title, only: [:new_project, :create_project ]

  def new_project
    @project = Project.new
  end

  def project_basic_details # sole responsibility is to store title and description in session
    session[:projectTitle] = params[:projectTitle]
    session[:projectDescription] = params[:projectDescription]
    redirect_to :new_project
  end

  def create
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

  # private
  # def the_title
  #   @project = Project.new
  # end

end
