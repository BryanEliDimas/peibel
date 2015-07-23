class ProfileController < ApplicationController
  before_action do
    signed_in?
  end

  def show
    @user = User.find_by(username: params[:username])
    @bio = @user.bio
    @followers = @user.all_follows
    @following = @user.all_following

    # Takes string of comma-separated skills
    # and turns into array
    unless @user.skills == nil
      @skills = @user.skills.split(', ')
    end

    unless @user == nil
      @projects = Project.where(user_id: @user.id).reverse
    end

    render layout: "pages"
  end

  def edit
  end

  def update_bio
    # @current_user.bio = params[:user][:bio]
    # @current_user.save
    @current_user.update(bio: params[:user][:bio])

    redirect_to edit_profile_path
  end

  def update_skills
    # @current_user.skills = params[:user][:skills]
    # @current_user.save
    @current_user.update(skills: params[:user][:skills])

    redirect_to edit_profile_path
  end

  def update_city
    # state = params[:user][:state]
    # @current_user.update(city: city, state: state)
    @current_user.update(city: params[:user][:city].downcase)

    redirect_to edit_profile_path
  end

  def inbox
    @messages = @current_user.mailbox.inbox
  end

  def compose
    @message = @current_user.messages.new
  end

  def msg
    @to = User.find_by(username: params[:mailboxer_message][:to])
    # @some_guy = User.find(35) # has id of 35 Mr. Rylee

    @current_user.send_message(@to, params[:mailboxer_message][:body], params[:mailboxer_message][:subject]).conversation
    redirect_to inbox_path
  end

  def update_title
    @current_user.update(title: params[:user][:title].downcase)

    redirect_to edit_profile_path
  end

  def follow # POST request
    who = User.find_by(username: params[:username])

    if who != @current_user
      @current_user.follow(who)
      redirect_to profile_path(username: who.username), success: "You are now following #{who.full_name}"
    else
      redirect_to root_path, alert: "Unable to follow yourself."
    end
  end

end
