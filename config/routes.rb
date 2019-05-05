Rails.application.routes.draw do

  get 'projects/index'
  root 'home#index'
  resources :todos
  resources :colors
  resources :projects

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
