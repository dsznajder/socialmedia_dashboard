FactoryGirl.define do
  factory :comment do
    text 'Some comment'
    likes { rand(10) }
    user { create(:user) }
    post { create(:post) }
  end
end
