class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :description
      t.integer :score
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
