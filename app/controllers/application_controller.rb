class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  add_flash_types :success # add custom flash message

  def signed_in?
    if (session[:user] == nil)
      redirect_to signup_path  # sign up path
    end
  end

  def user_id
    if session[:user] != nil
      loggedin_user_id = User.find_by(id: session[:user])
      loggedin_user_id
    end
  end
end
