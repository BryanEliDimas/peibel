class ProjectsController < ApplicationController
  
  def new
    @project = Project.new
  end

  def create  # create project
    @project = Project.new params.require(:project).permit(:name, :description, :price, :permalink, :content, :outline)
    @project.permalink = SecureRandom.hex(8)
    @project.user_id = @current_user.id
    # @project.price *= 100

    if @project.save
      redirect_to root_path
    else
      render :new_project, alert: "Please complete all steps"
    end
  end

  def show
    @project = Project.find_by(permalink: params[:permalink])

    render :layout => "application"
  end

  def my_projects
    @created_projects = Project.where(:user_id => @current_user.id).reverse
    # pps = PurchasedProject.where(user_id: @current_user.id)

    # @purchased_projects = Project.where(user_id: pps.id)

    @purchased_projects = Project.joins(:purchased_projects).where("purchased_projects.user_id" => @current_user.id)

    render :layout => "application"
  end

  def local_projects
    @projects = Project.joins(:user).where("users.city" => @current_user.city).reverse

    render :layout => "application"
  end

  def choose
    the_project_id = params[:instructables_id]
    @current_user.projects = the_project_id
  end

end
