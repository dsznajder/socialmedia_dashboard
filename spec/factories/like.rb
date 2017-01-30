FactoryGirl.define do
  factory :like do
    user { create(:user) }
  end
end
