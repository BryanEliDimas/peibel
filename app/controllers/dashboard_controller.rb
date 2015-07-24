class DashboardController < ApplicationController
  before_action do
    signed_in?
  end

  def index
    @users_with_projects = @current_user.following_users.reject{|user| user.projects.all.count < 1}
  end
end
