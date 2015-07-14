class EducatorsController < ApplicationController
  def new
    @educator = Educator.new
  end

  def create
    @educator = Educator.new params.require(:educator).permit(:first_name, :last_name, :username, :email, :password, :password_digest)
    if @educator.save
      session[:id] = @educator.id
      redirect_to root_path, success: "Cool! You're signed up #{@educator.username}!"
    else
      render :new, alert: "Something wrong."
    end
  end

  def profile
    @educator_info = Educator.find_by id: session[:id]
  end
end
