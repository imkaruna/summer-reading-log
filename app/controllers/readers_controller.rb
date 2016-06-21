class ReadersController < ApplicationController
  skip_before_action :verify_authenticity_token, if: :json_request?
  respond_to :json

  def index
    respond_with Reader.all
  end

  def create
    respond_with Reader.create(reader_params)
  end

  def update
    @reader = Reader.find(params[:id])
    respond_with @reader.update(reader_params)
  end

  def destroy
    @reader = Reader.find(params[:id])
    @reader.destroy
    respond_with Reader.all
  end

  private
  def reader_params
    params.require(:reader).permit(:name)
  end

  protected
  def json_request?
    request.format.json?
  end
end
