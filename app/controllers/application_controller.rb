class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  add_flash_types :success # add custom flash message

  # before_action :signed_in?, only: [:dashboard, :pages, :projects]

  def signed_in?
    if (session == nil || session[:user] == nil)
      redirect_to signup_path  # sign up path
    else
      @current_user = User.find_by(id: session[:user])
    end
  end

  def user_full_name
    loggedin_user_id = User.find_by(id: session[:user])
    loggedin_user_id.full_name
  end
end
