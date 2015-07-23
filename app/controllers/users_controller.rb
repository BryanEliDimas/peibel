class UsersController < ApplicationController
  def new
    @user = User.new
    render layout: "pages"
  end

  def create
    @user = User.new params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    if @user.save
      session[:user] = @user.id
      session[:username] = @user.username
      session[:full_name] = @user.full_name
      redirect_to edit_profile_path, success: "You're signed up #{@user.first_name}! Now enhance your experience by telling us more about you."
    else
      render :signup
    end
  end
end
