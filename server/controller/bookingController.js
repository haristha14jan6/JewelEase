import Booking from "../models/Booking.js";
import Jewel from "../models/Jewel.js"; // <-- Import Jewel

// Function to check availability of jewel for a given Date
const checkAvailability = async (jewel, pickupDate, returnDate) => {
  const bookings = await Booking.find({
    jewel,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });
  return bookings.length === 0;
};

// API to check availability of jewels for the given date and location
export const checkAvailabilityofJewel = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;

    // fetch all available jewels for the given location
    const jewels = await Jewel.find({ location, isavailable: true });

    // check jewel availability for the given date range
    const availableJewelsPromises = jewels.map(async (jewel) => {
      const isAvailable = await checkAvailability(jewel._id, pickupDate, returnDate);
      return { ...jewel._doc, isAvailable };
    });

    let availableJewels = await Promise.all(availableJewelsPromises);
    availableJewels = availableJewels.filter((jewel) => jewel.isAvailable);
    res.json({ success: true, availableJewels });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to create Booking
export const createBooking = async (req, res) => {
  try {
    const { _id } = req.user;
    const { jewel, pickupDate, returnDate } = req.body;

    const isAvailable = await checkAvailability(jewel, pickupDate, returnDate);
    if (!isAvailable) {
      return res.json({ success: false, message: "Jewel is not available" });
    }

    const jewelData = await Jewel.findById(jewel);

    // Calculate price based on pickupDate and returnDate
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);
    const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24)); // <-- fixed
    const price = jewelData.pricePerDay * noOfDays;

    await Booking.create({
      jewel,
      owner: jewelData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking created" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to list user Bookings
export const getUserBookings = async (req, res) => {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id }).populate("jewel").sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to get owner Bookings
export const getOwnerBookings = async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res.json({ success: false, message: "Unauthorized" });
    }
    const bookings = await Booking.find({ owner: req.user._id })
      .populate("jewel user")
      .select("-user.password")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to change booking status
export const changeBookingStatus = async (req, res) => {
  try {
    const { _id } = req.user;
    const { bookingId, status } = req.body;
    const booking = await Booking.findById(bookingId);

    if (booking.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "Unauthorized" });
    }

    booking.status = status;
    await booking.save();
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
