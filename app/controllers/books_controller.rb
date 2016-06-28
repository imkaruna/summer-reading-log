class BooksController < ApplicationController
  before_action :authenticate_user!, only: [:index, :new, :create, :show, :edit, :update, :remove, :destroy]
  before_action :is_teacher?,only: [:new, :create, :edit, :update, :remove, :destroy]
  skip_before_action :verify_authenticity_token, if: :json_request?
  # before_filter :authenticate_user!, only: [:create, :update]
  respond_to :json

  def index
    if current_user.role == 'Teacher'
      respond_with Book.all
    else
      if current_user.role == 'Student'
        @books = current_user.books.map {|b| {id: b.id, name: b.name, author: b.author, genre: b.genre, status: UserBook.find_by(book_id: b.id).status}}
        respond_with @books.as_json
      end
    end
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |format|
      format.json {render :json => @book.to_json(:only => [:id, :name, :author, :genre, :status])}
    end
  end

  def create
    respond_with Book.create(book_params)
  end

  def update
    if current_user.role == 'Student'
      @book = current_user.user_books.find_by(book_id: params[:id])
      @book.status = params[:status]
      @book.save
    end
      @book = Book.find(params[:id])
      respond_with @book.update(book_params)
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    respond_with Book.all
  end

  private
  def book_params
    params.require(:book).permit(:id, :name, :author, :genre, :status)
  end

  protected
  def json_request?
    request.format.json?
  end

  def is_teacher?
    current_user.role == 'Teacher'
  end
end
