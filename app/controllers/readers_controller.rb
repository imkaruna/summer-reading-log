class ReadersController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    respond_with Reader.all
  end

  def show
    @reader = Reader.find(params[:id])
    respond_to do |format|
      format.json {render :json => @reader.to_json(:only => [:id, :name], :include => [:books])}
    end
  end

  def create
    respond_with Reader.create(reader_params)
  end

  def update
    @reader = Reader.find(params[:id])
    params[:books].each do |book|
      book_to_add = Book.find_or_create_by(id: book["id"])
      unless @reader.books.include?(book_to_add)
        @reader.books << book_to_add
      end
    end
    @reader.update!(reader_params)
    respond_to do |format|
      format.json {render :json => @reader.to_json(:only => [:id, :name], :include => [:books])}
    end
  end

  def destroy
    @reader = Reader.find(params[:id])
    @reader.destroy
    respond_with Reader.all
  end

  private
  def reader_params
    params.require(:reader).permit(:id, :name, :books)
  end

  protected
  def json_request?
    request.format.json?
  end
end
