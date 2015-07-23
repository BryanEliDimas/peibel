class SessionsController < ApplicationController
  def new
    render layout: "pages"
  end

  def create
    email = params[:session][:email]
    password = params[:session][:password]

    user = User.find_by(email: email)

    if (user) && (user.authenticate password)
      session[:user] = user.id
      session[:username] = user.username
      session[:full_name] = user.full_name
      redirect_to root_path, success: "You're signed in #{user.full_name}!"
    else
      render :new, notice: "Please try again."
    end
  end

  def signout
    session.delete :user
    redirect_to root_path
  end
end
