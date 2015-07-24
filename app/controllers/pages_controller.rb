require 'http'

class PagesController < ApplicationController
  
  def instructable
    project_id = params[:project_id]

    response = Http.headers("X-Mashape-Key" => "CLIYw538fSmshhOhHM1vZDHfZmvTp1yuWWljsnQW0uoRDyPWAo", "Accept" => "application/json").get("https://devru-instructables.p.mashape.com/json-api/showInstructable?id=#{project_id}")
    json = JSON.parse response
    data = json.to_hash
    @project = data

    render layout: "application"
  end

  def instructables
    # Mashable API for Instructables
    response = Http.headers("X-Mashape-Key" => "CLIYw538fSmshhOhHM1vZDHfZmvTp1yuWWljsnQW0uoRDyPWAo", "Accept" => "application/json").get("https://devru-instructables.p.mashape.com/list?limit=20&offset=0&sort=recent&type=id&category=technology")
    json = JSON.parse response
    data = json.to_hash
    @items = data["items"].first(20)
    render layout: "application"
  end

  def find_tutors
    if (@current_user.city != nil) && (@tutors != [])
      @tutors = User.where(city: @current_user.city).reject{|n| n == @current_user}
    end

    render layout: "application"
  end

private
def instructables_api

end

end
