import Auction from '../models/auction.model.mjs'
import { Server } from 'socket.io';
export default (server) => {
    const io = new Server(server);
    io.on('connection', function(socket){
        socket.on('join auction room', data => {
            socket.join(data.room)
        })
        socket.on('leave auction room', data => {
            socket.leave(data.room)
        })
        socket.on('new bid', data => {
            bid(data.bidInfo, data.room)
        })
    })
    const bid = async (bid, auction) => {
        try {
          let result = await Auction.findOneAndUpdate({_id:auction, $or: [{'bids.0.bid':{$lt:bid.bid}},{bids:{$eq:[]}} ]}, {$push: {bids: {$each:[bid], $position: 0}}}, {new: true})
                                  .populate('bids.bidder', '_id name')
                                  .populate('seller', '_id name')
                                  .exec()
            io
            .to(auction)
            .emit('new bid', result)
        } catch(err) {
          console.log(err)
        }
    }
}

