FactoryGirl.define do
  factory :comment do
    text 'Some comment'
    user { create(:user) }
    post { create(:post) }
  end
end
