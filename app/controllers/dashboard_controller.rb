class DashboardController < ApplicationController
  before_action do
    @current_user = User.find_by(id: session[:user])
    signed_in?
  end

  def index
    @users_with_projects = @current_user.following_users.reject{|user| user.projects.all.count < 1}
  end
end
