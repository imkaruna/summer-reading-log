class ApplicationController < ActionController::Base
  include ActionController::RespondWith
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?


  DeviseController.respond_to :html, :json

  def configure_permitted_parameters
  devise_parameter_sanitizer.permit(:sign_up) do |user_params|
    user_params.permit(:role, :name, :email, :password, :password_confirmation)
    end
  end
end
