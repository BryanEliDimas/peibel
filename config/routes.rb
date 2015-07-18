Rails.application.routes.draw do

  # peibel routes
  get 'signup' => 'pages#signup', as: :signup
  post 'pages/signup_post', as: :users
  get 'signin' => 'pages#signin', as: :signin
  post 'pages/signin' => 'pages#signin_post', as: :signin_post
  delete 'signout' => 'pages#signout', as: :signout
  get 'pages/browse_projects', as: :browse_projects
  get 'pages/new_project', as: :new_project
  post 'pages/create', as: :projects
  post 'pages/choose_project', as: :choose_project
  get 'pages/my_projects', as: :my_projects
  get 'pages/project_details', as: :project_details

  get 'profile/edit' => 'profile#edit', as: :edit_profile
  put 'update_bio' => 'profile#update_bio', as: :update_bio
  put 'update_skills' => 'profile#update_skills', as: :update_skills
  put 'update_city' => 'profile#update_city', as: :update_city
  put 'update_title' => 'profile#update_title', as: :update_title
  get 'profile/:username' => 'profile#profile', as: :profile

  get 'inbox' => 'profile#inbox', as: :inbox
  get 'message/:username' => 'profile#compose', as: :compose
  post 'send_message' => 'profile#msg', as: :send

  get 'pages/find_tutors', as: :find_tutors

  get 'dashboard/index'

  # defaults to dashboard
  root :to => redirect('/dashboard')

  # view routes
  get '/dashboard' => 'dashboard#index'
  get 'pages/blank_page2'
  post 'pages/project_basic_details'



end