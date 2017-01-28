FactoryGirl.define do
  factory :post do
    text 'Some post'
    likes { rand(10) }
    user { create(:user) }
  end
end
