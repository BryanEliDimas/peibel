Rails.application.routes.draw do

  # peibel routes
  get 'pages/signup', as: :signup
  post 'pages/signup_post', as: :users
  get 'pages/signin' => 'pages#signin', as: :signin
  post 'pages/signin' => 'pages#signin_post', as: :signin_post
  delete 'signout' => 'pages#signout', as: :signout
  get 'pages/browse_projects', as: :browse_projects
  get 'pages/new_project', as: :new_project
  post 'pages/create', as: :projects
  post 'pages/choose_project', as: :choose_project
  get 'pages/my_projects', as: :my_projects
  get 'pages/project_details', as: :project_details

  get 'profile/edit' => 'profile#edit', as: :edit_profile
  put 'profile' => 'profile#update_bio', as: :update_bio
  put 'profile' => 'profile#update_skills', as: :update_skills
  get 'profile/:username' => 'profile#profile', as: :profile

  get 'dashboard/index'

  # defaults to dashboard
  root :to => redirect('/dashboard')

  # view routes
  get '/dashboard' => 'dashboard#index'
  get 'pages/blank_page2'
  post 'pages/project_basic_details'



end
