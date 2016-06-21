class CreateReaders < ActiveRecord::Migration
  def change
    create_table :readers do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
