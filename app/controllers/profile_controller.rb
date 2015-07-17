class ProfileController < ApplicationController
  before_action do
    @current_user = User.find_by(id: session[:user])
  end

  def profile
    @bio = @current_user.bio
    # Takes string of comma-separated skills
    # and turns into array
    user = User.find_by(username: params[:username])

    unless user.skills == nil
      @skills = user.skills.split(', ')
    end

    unless user == nil
      @projects = Project.where(:user_id => user.id ).reverse
    end

    render layout: "pages"
  end

  def edit
  end

  def update_bio
    # @current_user.bio = params[:user][:bio]
    # @current_user.save
    @current_user.update(bio: params[:user][:bio])

    redirect_to profile_path(username: @current_user.username)
  end

  def update_skills
    # @current_user.skills = params[:user][:skills]
    # @current_user.save
    @current_user.update(skills: params[:user][:skills])

    redirect_to profile_path(username: @current_user.username)
  end

  def update_city
    # state = params[:user][:state]
    # @current_user.update(city: city, state: state)
    @current_user.update(city: params[:user][:city].downcase)

    redirect_to profile_path(username: @current_user.username)
  end
end
