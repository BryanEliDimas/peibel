Rails.application.routes.draw do

  root 'dashboard#index'

  # Auto-generated routes by Payola gem
  mount Payola::Engine => '/payola', as: :payola

  # Auth system routes
  get 'signup' => 'users#new', as: :signup
  post 'auth/signup' => 'users#create', as: :users
  get 'signin' => 'sessions#new', as: :signin
  post 'auth/session' => 'sessions#create', as: :session
  delete 'auth/signout' => 'sessions#signout', as: :signout

  # User Profiles routes
  get 'profile/edit' => 'profile#edit', as: :edit_profile
  put 'profile/update_bio' => 'profile#update_bio', as: :update_bio
  put 'profile/update_skills' => 'profile#update_skills', as: :update_skills
  put 'profile/update_city' => 'profile#update_city', as: :update_city
  put 'profile/update_title' => 'profile#update_title', as: :update_title
  get 'profile/:username' => 'profile#show', as: :profile

  # Messaging routes
  get 'messages/inbox' => 'profile#inbox', as: :inbox
  get 'messages/:username' => 'profile#compose', as: :compose
  post 'messages/send' => 'profile#msg', as: :send

  # Followers functionality routes
  post 'follow/:username' => 'profile#follow', as: :follow

  get 'find_tutors' => 'pages#find_tutors', as: :find_tutors

  # Projects routes
  get 'projects/new' => 'projects#new', as: :new_project
  post 'projects/create' => 'projects#create', as: :projects
  get 'projects/local' => 'projects#local_projects', as: :local_projects
  post 'projects/choose' => 'projects#choose', as: :choose_project
  get 'projects/my_projects' => 'projects#my_projects', as: :my_projects
  get 'projects/:permalink' => 'project#show', as: :project

  # Instructables.com (API) routes
  get 'instructable' => 'pages#instructable', as: :instructable
  get 'instructables' => 'pages#instructables', as: :instructables

end
