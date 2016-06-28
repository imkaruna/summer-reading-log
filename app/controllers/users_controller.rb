class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :show, :edit, :update, :remove, :destroy]
  skip_before_action :verify_authenticity_token, if: :json_request?
  skip_before_filter :require_no_authentication, :only => [:new, :create]
  respond_to :json

  def index
    respond_with User.all
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.json {render :json => @user.to_json(:only => [:id, :name, :role], :include => [:books])}
    end
  end

  def create
    respond_with User.create(user_params)
  end

  def update
    @user = User.find(params[:id])
    if params[:books]
      params[:books].each do |book|
        book_to_add = Book.find_or_create_by(id: book["id"])
        unless @user.books.include?(book_to_add)
          @user.books << book_to_add
        end
      end
    end
    @user.update(user_params)
    respond_to do |format|
      format.json {render :json => @user.to_json(:only => [:id, :name], :include => [:books])}
    end
  end

  def update_status
    # binding.pry
    if current_user.role == 'Student'
      book = UserBook.find_by(book_id: params[:book_id], user_id: params[:user_id])
      book.update_attributes({:status => params[:status]})
      # book.save
      respond_to do |format|
        format.json {render :json => book.to_json}
      end
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    respond_with User.all
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :role, :books)
  end

  def is_teacher?
    current_user.role == 'Teacher'
  end

  protected
  def json_request?
    request.format.json?
  end


  def require_no_authentication
      if current_user.is_teacher?
          return true
      else
          return super
      end
  end
end
