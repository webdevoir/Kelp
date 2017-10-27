@businesses.each do |business|
  json.set! business.id do
    json.set! :name, business.name
    json.set! :rating, business.rating
    json.set! :id, business.id
    json.set! :address, business.address
  end
end