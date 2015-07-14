require 'test_helper'

class EducatorsControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get profile" do
    get :profile
    assert_response :success
  end

end
