function pubSub() {
  const subscribers=[]

  function subscribe( fn) {
    subscribers.push(fn)
  }
  function publish(data) {
    subscribers.forEach((subscriber)=>subscriber(data))
  }
  return {
    subscribe: subscribe,
    publish
  }
  
}

const pb = pubSub()

pb.subscribe((data)=>console.log('1',data))
pb.subscribe((data)=>console.log('2',data))
pb.subscribe((data)=>console.log('3',data))
pb.subscribe((data)=>console.log('4',data))
pb.subscribe((data)=>console.log('5',data))

pb.publish("PubSub works")
pb.publish("works")