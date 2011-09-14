class CreateRsvps < ActiveRecord::Migration
  def self.up
    create_table :rsvps do |t|
      t.string :guest_name
      t.string :companion_name
      t.boolean :is_joining

      t.timestamps
    end
  end

  def self.down
    drop_table :rsvps
  end
end
