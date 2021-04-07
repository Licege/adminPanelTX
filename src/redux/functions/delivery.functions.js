const calcDeliveryCost = (state, price) => {
  if (state.currentOrder.deliveryType === 'home') {
    const setting = state.settings.find(settings => settings.city === state.currentOrder.address.city)
    if (price >= setting.freeDelivery) {
      return 0
    } else {
      return setting.priceForDelivery
    }
  }
  return 0
}

const addDishIntoList = (dishes, dish) => {
  const index = dishes.findIndex(d => d.id === dish.id)
  if (index === -1) {
    return [...dishes, dish]
  } else {
    const newDishes = [ ...dishes ]
    newDishes[index].count += 1
    return newDishes
  }
}

export function handleAddDishToOrder(state, action) {
  const { id, title, cost } = action.payload

  const position = { id, title, cost, count: 1 }
  const price = state.currentOrder.price + position.cost
  const list = addDishIntoList(state.currentOrder.list, position)
  const deliveryCost = calcDeliveryCost(state, price)

  return { ...state, currentOrder: { ...state.currentOrder, list, price, deliveryCost } }
}

export function handleRemoveDishFromOrder(state, action) {
  const position = state.currentOrder.list.find(order => order.id === action.payload)
  const list = state.currentOrder.list.filter(order => order.id !== action.payload)
  const price = state.currentOrder.price - (position.cost * position.count)
  const deliveryCost = calcDeliveryCost(state, price)

  return { ...state, currentOrder: { ...state.currentOrder, list, price, deliveryCost } }
}

export function handleIncreaseDishToOrder(state, action) {
  const position = state.currentOrder.list.find(order => order.id === action.payload)
  position.count += 1
  const list = state.currentOrder.list.map(order => order.id === position.id ? position : order)
  const price = state.currentOrder.price + position.cost
  const deliveryCost = calcDeliveryCost(state, price)

  return { ...state, currentOrder: { ...state.currentOrder, list, price, deliveryCost } }
}

export function handleDecreaseDishFromOrder(state, action) {
  let list
  const position = state.currentOrder.list.find(order => order.id === action.payload)

  if (position.count === 1) {
    list = state.currentOrder.list.filter(order => order.id !== action.payload)
  } else {
    position.count -= 1
    list = state.currentOrder.list.map(order => order.id === action.payload ? position : order)
  }

  const price = state.currentOrder.price - position.cost
  const deliveryCost = calcDeliveryCost(state, price)

  return { ...state, currentOrder: { ...state.currentOrder, list, price, deliveryCost } }
}