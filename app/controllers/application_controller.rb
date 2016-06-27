class ApplicationController < ActionController::Base
  include ActionController::RespondWith
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :configure_permitted_parameters, if: :devise_controller?
  def angular
    render 'layouts/application'
  end
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << [:name, :role]
  end
end
