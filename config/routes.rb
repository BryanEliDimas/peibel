Rails.application.routes.draw do

  get 'dashboard/index'

  # defaults to dashboard
  root :to => redirect('/dashboard')

  # view routes
  get '/dashboard' => 'dashboard#index'
  get 'pages/new_project', as: :new_project
  get 'pages/blank_page2'
  post 'pages/project_basic_details'

  post 'pages/create', as: :projects


end
