class RsvpsController < ApplicationController
  layout nil
  
  def protect_against_forgery?
    false
  end

  def index
    @rsvps = Rsvp.find :all
  end

  # POST /rsvps
  # POST /rsvps.xml
  def create
    @rsvp = Rsvp.new(params[:rsvp])
    puts @rsvp.to_json
    respond_to do |format|
        @rsvp.save
        format.js
    end
  end
end
