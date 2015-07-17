class ProfileController < ApplicationController
  before_action do
    @current_user = User.find_by(id: session[:user])
  end

  def profile
    @bio = @current_user.bio
    # Takes string of comma-separated skills
    # and turns into array
    @skills = @current_user.skills.split(', ') if @current_user.skills != nil

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
end
