class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    respond_with Book.all
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |format|
      format.json {render :json => @book.to_json(:only => [:name, :author, :genre])}
    end
  end

  def create
    respond_with Book.create(book_params)
  end

  def update
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
    params.require(:book).permit(:name, :author, :genre)
  end

  protected
  def json_request?
    request.format.json?
  end
end
