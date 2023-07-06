const Order = require('./models/Order');
const User = require('./models/User');

Order.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: '_id',
      as: 'user'
    }
  }
])
  .exec((err, orders) => {
    if (err) {
      console.log(err);
    } else {
      console.log(orders);
    }
  });
