Rails.application.routes.draw do

  # peibel routes
  get 'pages/educator_profile'
  get 'pages/educator_signup'
  post 'pages/educator_create', as: :educators

  # get 'dashboard/index'

  # defaults to dashboard
  # root :to => redirect('/dashboard')

  # view routes
  # root 'dashboard#index'
  get 'pages/new_project', as: :new_project
  get 'pages/blank_page2'
  post 'pages/project_basic_details'

  post 'pages/create', as: :projects


end
